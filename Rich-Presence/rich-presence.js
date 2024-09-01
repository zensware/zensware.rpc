const Discord = require('discord.js-selfbot-v13');
const fs = require('fs');
const path = require('path');

const presenceConfigPath = path.join(__dirname, 'presence-config.json');
const presenceConfig = JSON.parse(fs.readFileSync(presenceConfigPath, 'utf-8'));

/**
 * 
 * 
 * @param {Object} config
 * @returns {Discord.Client}
 */
const initializeDiscordClient = (config) => {
  const client = new Discord.Client({
    readyStatus: false,
    checkUpdate: false,
  });

  client.once('ready', async () => {
    console.clear();
    console.log(`Connected to Discord Client: ${client.user.tag}`);

    updateRichPresence(client);

    setInterval(() => updateRichPresence(client), 30000);
  });


  client.login(config.Authorization_Token).catch(console.error);

  return client;
};

/**
 * 
 * 
 * @param {Discord.Client} client
 */
const updateRichPresence = (client) => {
  try {
    const richPresence = new Discord.RichPresence()
      .setApplicationId(presenceConfig.applicationId)
      .setType(presenceConfig.activityType)
      .setURL(presenceConfig.url)
      .setState(presenceConfig.state)
      .setName(presenceConfig.name)
      .setDetails(presenceConfig.details)
      .setStartTimestamp(Date.now())
      .setAssetsLargeImage(presenceConfig.largeImage)
      .setAssetsLargeText(presenceConfig.largeImageText)
      .setAssetsSmallImage(presenceConfig.smallImage)
      .setAssetsSmallText(presenceConfig.smallImageText);

    if (presenceConfig.buttons && presenceConfig.buttons.length > 0) {
      presenceConfig.buttons.forEach(button => {
        richPresence.addButton(button.label, button.url);
      });
    }

    client.user.setActivity(richPresence);
    client.user.setPresence({ status: "idle" });

    console.log('Rich Presence updated successfully!');
  } catch (error) {
    console.error('Error updating Rich Presence:', error.message);
  }
};

module.exports = initializeDiscordClient;
