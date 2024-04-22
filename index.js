const express = require('express');
const Discord = require('discord.js-selfbot-v13');

const app = express();
const port = process.env.PORT || 3000;

const client = new Discord.Client();

const Authorization_Token = process.env.Authorization_Token;
const Webhook_ID = process.env.Webhook_ID;
const Webhook_Token = process.env.Webhook_Token;

let Webhook_Support = true; // Variable to control webhook enable/disable

client.on('ready', async () => {
  console.clear();
  console.log(`ZenithRPC has connected to Discord Client: ${client.user.tag}`);

  const sendWebhookMessage = () => {
    if (Webhook_Support) {
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
    }
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

  const updatePresenceAndActivity = () => {
    sendWebhookMessage();
    const r = new Discord.RichPresence()
      .setApplicationId('1023269983922442373') // Please replace all values to your own. If it seems to say null then you could easily replace it with 'text/image-value' 
      .setType('STREAMING') // Playing, Streaming, Watching, Listening, Competing 
      .setURL('https://twitch.tv/zensware')
      .setState(null)
      .setName('zensware')
      .setDetails(null)
      .setStartTimestamp(Date.now())
      .setAssetsLargeImage('https://media.discordapp.net/attachments/1206955445940658287/1223590584963432559/e6161b3e1c2b6b737a47522fdf4b2d36-1328298384.gif?ex=661a6888&is=6607f388&hm=5a1cb58276bf5a60685435e827f683eb7c232af1c1e6fd1ecec4815cefad1787&=&width=545&height=559')
      .setAssetsLargeText(null)
      .setAssetsSmallImage(null)
      .setAssetsSmallText(null)
      .addButton('Github Repo', 'https://github.com/ZensDK/ZenithRPC')
      .addButton('Discord', 'https://discord.gg/Xwp8WyZfX2');
    client.user.setActivity(r);
  };

  updatePresenceAndActivity();
  setInterval(updatePresenceAndActivity, 30000);
  client.user.setPresence({ status: "idle" });
});

app.get('/', (req, res) => {
  res.send('ZenithRPC is running!');
});

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
