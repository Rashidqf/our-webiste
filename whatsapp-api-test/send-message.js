require('dotenv').config({ path: require('path').join(__dirname, '.env') });

const recipientInput = process.argv[2] || process.env.WHATSAPP_TEST_RECIPIENT;
const recipient = recipientInput && recipientInput.replace(/[^\d]/g, '');
const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
const apiVersion = process.env.WHATSAPP_GRAPH_API_VERSION;
const templateName = process.env.WHATSAPP_TEMPLATE_NAME || 'hello_world';
const templateLanguage = process.env.WHATSAPP_TEMPLATE_LANGUAGE || 'en_US';

async function main() {
  const missing = [];
  if (!phoneNumberId) missing.push('WHATSAPP_PHONE_NUMBER_ID');
  if (!accessToken || accessToken.startsWith('replace-with-')) {
    missing.push('WHATSAPP_ACCESS_TOKEN');
  }
  if (!apiVersion || !/^v\d+\.\d+$/.test(apiVersion)) {
    missing.push('WHATSAPP_GRAPH_API_VERSION (for example, v23.0)');
  }
  if (!recipient || recipient.length < 8 || recipient.length > 15) {
    missing.push('a recipient number in international format, e.g. 15551234567');
  }

  if (missing.length) {
    console.error(`Configure: ${missing.join(', ')}`);
    process.exitCode = 1;
    return;
  }

  const response = await fetch(
    `https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: recipient,
        type: 'template',
        template: {
          name: templateName,
          language: { code: templateLanguage },
        },
      }),
      signal: AbortSignal.timeout(15000),
    }
  );

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    console.error(`WhatsApp API returned HTTP ${response.status}:`);
    console.error(JSON.stringify(result, null, 2));
    process.exitCode = 1;
    return;
  }

  console.log('Message accepted by WhatsApp:');
  console.log(JSON.stringify(result, null, 2));
}

main().catch((error) => {
  console.error(`Request failed: ${error.message}`);
  process.exitCode = 1;
});