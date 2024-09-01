const initializeDiscordClient = require('./Rich-Presence/rich-presence');
const initializeExpressServer = require('./Web-Service/server');
const sendWebhookMessage = require('./Utils/webhook-support');
const { calculateUptime } = require('./Utils/time');

const config = loadConfig();

const client = initializeDiscordClient(config);

if (config.Webhook_ID && config.Webhook_Token) {
  sendWebhookMessage(client, config);
}

const port = process.env.PORT || 3000;
initializeExpressServer(port);

/**
 *
 *
 * @returns {Object}
 */
function loadConfig() {
  const fs = require('fs');
  const path = require('path');
  const dotenv = require('dotenv');
  
  dotenv.config();

  const configPath = path.join(__dirname, 'Web-Service', 'config.json');
  let config = {};

  if (fs.existsSync(configPath)) {
    config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  }
  
  config.Authorization_Token = config.Authorization_Token || process.env.Authorization_Token;
  config.Webhook_ID = config.Webhook_ID || process.env.Webhook_ID;
  config.Webhook_Token = config.Webhook_Token || process.env.Webhook_Token;

  return config;
}
