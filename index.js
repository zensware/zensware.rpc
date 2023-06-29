const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

const webhookId = 'Webhook-ID';
const webhookToken = 'Webhook-Token';

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - ZenithRPC has connected to Dsicord!`);

  const updatePresence = () => {
    const embed = new Discord.MessageEmbed()
      .setColor('#545759')
      .setTitle('ZenithRPC | Updater')
      .setDescription('**Zenith** are proud to announce their new client updating feature to check your uptime from your phone.')
      .addField('Discord Client:', client.user.tag, true)
      .addField('Client Uptime:', calculateUptime(), true)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter('・Developer: zensware   ', client.user.displayAvatarURL())
      .setTimestamp();

    const webhookClient = new Discord.WebhookClient({ id: webhookId, token: webhookToken });
    webhookClient.send({ embeds: [embed] })
      .then(() => {
        console.log('Embed sent successfully!');
      })
      .catch(console.error);
  };

  const calculateUptime = () => {
    const currentTime = Date.now();
    const uptime = currentTime - client.readyAt;
    const formattedUptime = formatMilliseconds(uptime);
    return formattedUptime;
  };

  const formatMilliseconds = (milliseconds) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  };

  const r = new Discord.RichPresence()
    .setApplicationId('1023269983922442373')
    .setType('LISTENING') //Choosable options: STREAMING, PLAYING, LISTENING.
    .setURL('https://twitch.tv/username'
    .setState('text')
    .setName('title')
    .setDetails('title')
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('image-url')
    .setAssetsLargeText('image-text')
    .setAssetsSmallImage('image-url')
    .setAssetsSmallText('image-text')
    .addButton('button 1', 'https://link.com/')
    .addButton('button 2', 'https://link.com/');
  
  const updatePresenceAndActivity = () => {
    updatePresence();
    client.user.setActivity(r);
  };
  updatePresenceAndActivity();
  setInterval(updatePresenceAndActivity, 30000);
  client.user.setPresence({ status: "idle" });
});
client.login(process.env.TOKEN);
