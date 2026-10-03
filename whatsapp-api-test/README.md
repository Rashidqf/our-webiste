# WhatsApp API test harness

This standalone folder contains a test-message CLI and a local webhook listener. It uses the WhatsApp test number and account IDs supplied in the setup conversation. It does not contain an access token or app secret.

## Configure

From the repository root, copy the example environment file:

```powershell
Copy-Item whatsapp-api-test/.env.example whatsapp-api-test/.env
```

Edit `whatsapp-api-test/.env` and set:

- `WHATSAPP_ACCESS_TOKEN`: a temporary token from the Meta WhatsApp API Setup page. Never commit or share it.
- `WHATSAPP_TEST_RECIPIENT`: the international-format number added as a test recipient, digits only.
- `WHATSAPP_GRAPH_API_VERSION`: a currently supported Graph API version for your app.
- `WHATSAPP_VERIFY_TOKEN`: a random string you create and also enter in Meta's webhook configuration.
- `WHATSAPP_APP_SECRET`: the app secret from Meta App Settings > Basic. Webhook POSTs are rejected unless signature verification is configured.

Generate a verify token with:

```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

The local `.env` file is ignored by Git. Do not paste access tokens, app secrets, or verification codes into chat.

## Send a test template

The test recipient must first be added in Meta's WhatsApp API Setup page. From the repository root:

```powershell
node whatsapp-api-test/send-message.js
```

Or pass a recipient explicitly:

```powershell
node whatsapp-api-test/send-message.js 15551234567
```

By default, the script sends the pre-approved `hello_world` template in `en_US`. Change `WHATSAPP_TEMPLATE_NAME` and `WHATSAPP_TEMPLATE_LANGUAGE` only to a template available on this test account. The script sends a real message when run.

## Receive webhooks through ngrok

Start the local receiver in one terminal:

```powershell
node whatsapp-api-test/server.js
```

Start ngrok in another:

```powershell
ngrok http 3001
```

Copy the HTTPS forwarding URL from ngrok, then set the Meta app's WhatsApp webhook callback URL to:

```text
https://YOUR-NGROK-DOMAIN/webhook
```

Enter the same `WHATSAPP_VERIFY_TOKEN` from `.env`, verify the callback, and subscribe the app to the `messages` field. Subscribe the WhatsApp Business Account to the app's webhooks as well. Keep both processes running while testing.

The listener handles Meta's GET challenge and validates `X-Hub-Signature-256` on POST events using `WHATSAPP_APP_SECRET`. It logs event types and delivery statuses, not message content or recipient numbers.

Check the local receiver with:

```powershell
Invoke-RestMethod http://127.0.0.1:3001/health
```