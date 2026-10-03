require('dotenv').config({ path: require('path').join(__dirname, '.env') });

const crypto = require('crypto');
const http = require('http');

const port = Number(process.env.WEBHOOK_PORT || 3001);
const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN || '';
const appSecret = process.env.WHATSAPP_APP_SECRET || '';
const maxBodyBytes = 1024 * 1024;

function safeEqual(left, right) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  return (
    leftBuffer.length === rightBuffer.length &&
    crypto.timingSafeEqual(leftBuffer, rightBuffer)
  );
}

function logEventSummary(payload) {
  for (const entry of payload.entry || []) {
    for (const change of entry.changes || []) {
      const value = change.value || {};
      console.log(
        JSON.stringify({
          field: change.field,
          phone_number_id: value.metadata?.phone_number_id,
          message_types: (value.messages || []).map((message) => message.type),
          statuses: (value.statuses || []).map((status) => status.status),
          error_count: (value.errors || []).length,
        })
      );
    }
  }
}

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`);

  if (request.method === 'GET' && url.pathname === '/health') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ ok: true }));
    return;
  }

  if (request.method === 'GET' && url.pathname === '/webhook') {
    const mode = url.searchParams.get('hub.mode') || '';
    const token = url.searchParams.get('hub.verify_token') || '';
    const challenge = url.searchParams.get('hub.challenge') || '';

    if (
      !verifyToken ||
      mode !== 'subscribe' ||
      !challenge ||
      !safeEqual(token, verifyToken)
    ) {
      response.writeHead(403);
      response.end('Webhook verification failed');
      return;
    }

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(challenge);
    return;
  }

  if (request.method === 'POST' && url.pathname === '/webhook') {
    if (!appSecret) {
      response.writeHead(503);
      response.end('Webhook signature verification is not configured');
      return;
    }

    const chunks = [];
    let bodySize = 0;
    let tooLarge = false;

    request.on('data', (chunk) => {
      bodySize += chunk.length;
      if (bodySize > maxBodyBytes) {
        tooLarge = true;
        return;
      }
      chunks.push(chunk);
    });

    request.on('end', () => {
      if (tooLarge) {
        response.writeHead(413);
        response.end('Payload too large');
        return;
      }

      const rawBody = Buffer.concat(chunks);
      const signature = request.headers['x-hub-signature-256'] || '';
      const expectedSignature = `sha256=${crypto
        .createHmac('sha256', appSecret)
        .update(rawBody)
        .digest('hex')}`;

      if (!safeEqual(signature, expectedSignature)) {
        response.writeHead(401);
        response.end('Invalid webhook signature');
        return;
      }

      let payload;
      try {
        payload = JSON.parse(rawBody.toString('utf8'));
      } catch {
        response.writeHead(400);
        response.end('Invalid JSON');
        return;
      }

      logEventSummary(payload);
      response.writeHead(200);
      response.end('EVENT_RECEIVED');
    });

    return;
  }

  response.writeHead(404);
  response.end('Not found');
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Webhook listener ready at http://127.0.0.1:${port}`);
  console.log(`Health check: http://127.0.0.1:${port}/health`);
});