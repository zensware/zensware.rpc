const Discord = require('discord.js-selfbot-v13');

/**
 *
 * 
 * @param {Discord.Client}
 * @param {Object}
 */
const sendWebhookMessage = (client, config) => {
  try {
    const embed = new Discord.MessageEmbed()
      .setColor('#545759')
      .setTitle('zensware.rpc | Webhook Logs')
      .setDescription('Our recent update has included "Render.com" hosting with our old functionalities.')
      .addFields(
        { name: 'Discord Client:', value: client.user.tag, inline: true },
        { name: 'Client Uptime:', value: calculateUptime(client), inline: true }
      )
      .setThumbnail("https://media.discordapp.net/attachments/1206955445940658287/1223021688971591770/zenith-grey.png?ex=661856b5&is=6605e1b5&hm=0c0699c469634dda8ce20ceb6d31d5cfd8e62005aafe78acae73edae47a3b530&=&format=webp&quality=lossless&width=600&height=450")
      .setFooter({ text: '・Developer: zensware', iconURL: client.user.displayAvatarURL() })
      .setTimestamp();

    const webhookClient = new Discord.WebhookClient({ id: config.Webhook_ID, token: config.Webhook_Token });
    webhookClient.send({ embeds: [embed] })
      .then(() => console.log('Webhook embed sent successfully!'))
      .catch(console.error);
  } catch (error) {
    console.error('Error sending webhook message:', error.message);
  }
};

module.exports = sendWebhookMessage;
