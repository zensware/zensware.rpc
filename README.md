# Welcome to ZenithRPC

We're thrilled to announce that our Rich Presence has been updated to the latest standards and is now fully compatible with the free hosting service "Render".

## 🛠️ Change Log 🛠️
```di
[+] "Render.com compatibility"
[+] "Webhook Protection: Environment "
[-] "Temporarily removed commands due to its usage."
```
## ZenithRPC: Promoting Your Work on Discord
ZenithRPC is designed for creators aiming to promote their work on Discord. With a range of interactive features, it offers endless customization possibilities to share your creations globally.

# The right setup guide.
This is the recommended way for you to setup ZenithRPC if you're a beginner please follow this guide!

## First Step: Forking the Guide.
This is pretty simple, but make sure you're going to fork this repository to have the ability of changing the Rich Presence for your own taste.


## Second Step: Changing the Rich presence.
If you're wondering how to change the Rich presence please look at the provided code down below:
```js
const r = new Discord.RichPresence()
      .setApplicationId('Application-ID')
      .setType('PLAYING') // PLAYING, STREAMING, WATCHING, LISTENING, COMPETING 
      .setURL('https://twitch.tv/username')
      .setState('State')
      .setName('Name')
      .setDetails('Details')
      .setStartTimestamp(Date.now())
      .setAssetsLargeImage('https://media.discordapp.net/')
      .setAssetsLargeText('LargeText')
      .setAssetsSmallImage('https://media.discordapp.net/')
      .setAssetsSmallText('SmallText')
      .addButton('Button 1', 'https://link.com/')
      .addButton('Button 2', 'https://link.com/');
    client.user.setActivity(r);
  };
```
Please replace all values to your own. If it seems to say null then you could easily replace it with 'text/image-value'

## Third Step: Setting Up Hosting with Render.com

When it's time to host your source code, especially if you're looking for a free option, Render.com is an excellent choice. Here's how to get started:

#### 3.1 Create an Account and Web Service
1. Sign up for an account on Render.com if you haven't already done so.
2. Once logged in, navigate to the Dashboard and create a new "Web Service."
3. When prompted, select "How would you like to deploy your web service?" and proceed to the next step.

#### 3.2 Import Your GitHub Repository
1. On the import page, choose "Public Git repository."
2. Paste the URL of your GitHub repository (e.g., "https://github.com/username/ZenithRPC/") and click "Continue."

## Fourth Step: Installation Method

Congratulations on reaching the final installation step! Here's what you need to do next:

### 4.1 Naming Your Render Application
1. Choose a name for your Render Application. This will be the identifier for your hosted application.

### 4.2 Setting Up Runtime Environment
1. Navigate to the runtime settings and ensure that it's set to Node.js.

### 4.3 Build Command Configuration
1. Set the build command to "npm install".

### 4.4 Configuring Environment Variables
1. To ensure your code functions properly, you'll need to set up Environment Variables.
2. Add all necessary Environment Variables, including the `Authorization_Token` and any others required for your code to operate smoothly.

## Fifth and Final Step: Getting your Render Application on Cronjob Hosting
Get the link of your Render Application which found at the top "Web service" the link will look something like this: "https://ApplicationName.onrender.com"
