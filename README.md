
# ᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼What is a RPC?
A Discord RPC (Rich Presence) is a prominent feature of the Discord API designed specifically for developers. It empowers developers to generate and exhibit detailed presence information to Discord users. This functionality facilitates the showcasing of personalized details regarding users' activities, status, and interactions within the Discord client or gaming environment. Typically, the Discord RPC interface adopts a format similar to the illustrative example provided below.
![image](https://cdn.discordapp.com/attachments/1121661789042655283/1123381334392455299/RPC-Transparent.png)
<div align="center">


# Why did we make ZenithRPC?
We have developed this application to cater to individuals who are interested in promoting their work on Discord. The application boasts a wide range of functionalities, making it an interactive platform that can be fully customized to suit your needs. This level of customization allows for endless possibilities in sharing your creations with a global audience.

## Inspiration from MrNekrozyYT
#### I would of probably never made this if it wasn't for Nekrozy's main RPC and I take major part of that source code and have redesigned it from there on and added other features to it since his version

## Zenith's Key Application Features
 Zenith incorporates advanced functionalities to meet the diverse needs of its users, providing an enhanced and versatile experience.
```
- Set a custom status on Discord with text and default images.

- Add 2 button which contain links onto your status for your own website or social(s).

- Create custom profiles with your own images and title.

- The ability to theme the application to your liking.
```
## Additional Features
```
- ZenithRPC integrates with a Discord webhook to send rich presence updates.

- The application calculates the uptime of the client and displays it in the rich presence information.

- The rich presence information includes the Discord client's account name and uptime.

- The client's account avatar is displayed as a thumbnail in the rich presence information.

- ZenithRPC automatically updates the presence every 30 seconds to keep the information up to date.

- The client's presence/activity is updated along with the webhook presence.
```

# Guidance for optimal application utilization
 You have the ability to tailor the Application to Your Unique Specifications
#### Discord Presence
 ```javascript
.setApplicationId('Replace with your Application-ID')
.setType('LISTENING') //STREAMING, PLAYING, LISTENING.
.setURL('https://twitch.tv/username') // Replacable with your Youtube URL
.setState('Live Daily on Twitch')
.setName('Replace with your own name')
.setDetails('Replace with your own name')
.setStartTimestamp(Date.now()) // Remove this if you dont want the Timestamp (The time it started the rpc)
```
#### Discord Webhoook
```javascript
      .setColor('#545759') Hex ID
      .setTitle('ZenithRPC | Updater') 
      .setDescription('**Zenith** are proud to announce their new client updating feature to check your uptime from your phone.')
      .addField('Discord Client:', client.user.tag, true) // Display account name
      .addField('Client Uptime:', calculateUptime(), true) // Function to calculate uptime
      .setThumbnail(client.user.displayAvatarURL()) // Display account avatar as thumbnail
      .setFooter('・Developer: zensware   ', client.user.displayAvatarURL()) // Footer text and bot avatar
      .setTimestamp();
```
Simply swap out the values inside of the the index.js file showed inside of the box above.
#
# Safety and Protection of Your Account
Although there is a breach of the terms of service, the likelihood of encountering penalties, such as account suspension, is minimal and improbable.

## Webhook Protection

At present, the webhook offers a limited level of protection. However, with your invaluable support and engagement, we can fortify its security measures. Upon reaching 10 stars for this repository, we will prioritize the implementation of enhanced protection features. Together, we can create a safer environment for your webhook usage. Thank you for being a part of this journey!

## Discord Token
While the webhook may currently lack comprehensive protection, we have taken rigorous measures to ensure the safety of your Discord token. Specifically, we have implemented a secure storage mechanism within your Replit lock file. This file remains confidential and accessible only to you, guaranteeing that your token remains safeguarded.

However, it is crucial to note that an exception to this rule arises when sharing your Replit project with another user. In such cases, the confidentiality of your token may be compromised.

Rest assured, we are continuously working to enhance the overall security of your webhook, prioritizing the protection of your sensitive information. Your trust is of utmost importance to us as we strive to deliver a secure and reliable experience.

### How to obtain token and store it
#

### Here's a guide to obtain your Discord Token: A Step-by-Step Guide
To begin, let's walk through the process of obtaining your Discord token. Follow these steps:

1 .Open Discord in your browser: Launch your preferred web browser and access Discord's web application. ᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼

2. Access Developer Tools: Press CTRL + SHIFT + I (or Command + Option + I on macOS) to open the Developer Tools panel. This will enable you to inspect and interact with the underlying code.

3. Navigate to the Console: Within the Developer Tools panel, locate the "Console" tab and click on it to access the JavaScript console.

4. Paste the Command: In the console, paste the following command: ``console.log(window.localStorage.token)`` . Press Enter to execute the command.

5. Retrieve Your Token: Upon executing the command, your Discord token will be displayed in the console. Copy the token from the output.

### How to store your Discord Token:
Tutorial here: https://youtube.com/shorts/XAs14rlLmnY?feature=share
