const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const Authorization_Token = process.env.Authorization_Token;
const Webhook_ID = process.env.Webhook_ID;
const Webhook_Token = process.env.Webhook_Token;

client.on('ready', async () => {
  console.clear();
  console.log(`ZenithRPC has connected to Discord Client: ${client.user.tag}`);

  const updatePresence = () => {
    const embed = new Discord.MessageEmbed()
      .setColor('#545759')
      .setTitle('ZenithRPC | Webhook Logs')
      .setDescription('Our recent update has included "Render.com" hosting with our old functionalities.')
      .addField('Discord Client:', client.user.tag, true)
      .addField('Client Uptime:', calculateUptime(), true)
      .setThumbnail("https://media.discordapp.net/attachments/1206955445940658287/1223021688971591770/zenith-grey.png?ex=661856b5&is=6605e1b5&hm=0c0699c469634dda8ce20ceb6d31d5cfd8e62005aafe78acae73edae47a3b530&=&format=webp&quality=lossless&width=600&height=450")
      .setFooter('・Developer: zensware   ', client.user.displayAvatarURL())
      .setTimestamp();

    const webhookClient = new Discord.WebhookClient({ id: Webhook_ID, token: Webhook_Token });
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
    .setApplicationId('Your Application ID') // You can either create or find your application here: https://discord.com/developers/applications
    .setType('STREAMING') //Choosable options: STREAMING, PLAYING, LISTENING, WATCHING & COMPETING
    .setURL('https://twitch.tv/username')
    .setState('Blank')
    .setName('Blank')
    .setDetails('Blank')
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1206955445940658287/1213784658345730088/zenith-grey.png?ex=66126b8d&is=65fff68d&hm=bbcb272ceba5a39e8e372fb14c5cc8f44c4efa7da714462ff0106c1b50a88798&=&format=webp&quality=lossless&width=600&height=450')
    .setAssetsLargeText('Large-Image-Text')
    .setAssetsSmallImage('Small-Image-Link')
    .setAssetsSmallText('Small-Image-Text')
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
client.login(Authorization_Token);
