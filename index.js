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
    .setApplicationId('1023269983922442373') // You can either create or find your application here: https://discord.com/developers/applications
    .setType('STREAMING') //Choosable options: STREAMING, PLAYING, LISTENING, WATCHING & COMPETING
    .setURL('https://twitch.tv/zensware')
    .setState('zensware')
    .setName('zensware')
    .setDetails(null) // Just add values if you'd like.
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1206955445940658287/1223590584963432559/e6161b3e1c2b6b737a47522fdf4b2d36-1328298384.gif?ex=661a6888&is=6607f388&hm=5a1cb58276bf5a60685435e827f683eb7c232af1c1e6fd1ecec4815cefad1787&=&width=545&height=559')
    .setAssetsLargeText(null) // Just add values if you'd like.
    .setAssetsSmallImage(null) // Just add values if you'd like.
    .setAssetsSmallText(null) // Just add values if you'd like.
    .addButton('Github Repo', 'https://github.com/ZensDK/ZenithRPC')
    .addButton('Discord', 'https://discord.gg/Xwp8WyZfX2');

  const updatePresenceAndActivity = () => {
    updatePresence();
    client.user.setActivity(r);
  };
  updatePresenceAndActivity();
  setInterval(updatePresenceAndActivity, 30000);
  client.user.setPresence({ status: "idle" });
});
client.login(Authorization_Token);
