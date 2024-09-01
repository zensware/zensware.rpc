# Welcome to zensware.rpc

We're a self-bot rich presence tool, made for functionality and to host on platforms such as "Render.com" for a free hosting solution.

## Change Log
```di
[+] "Updated package.json for usage compatability!"
[+] "File Seperation for a more seemless look."
```

## zensware.rpc: We help you promote yourself online
zensware.rpc is designed for creators to promote their work on Discord. Such as an online shop. Our project is also usable for regular use for a greater add-on design to your profile!

We don't have the greatest following or usage from people just yet which would mean the update frequency isn't the greatest, but we're willing to update for a more user positive experience.

## Guidance for setting our application up & hosting.
Are you confused and overloaded with information? We're here to help you setup and personilise your rich presence for your needs. We'll go set by step on how to set it up so feel free to skip any stage or comeback to one.

### Forking Repository
First of all you need to make sure you fork the Repo to be able to edit your own files.

#### Deciding which form of hosting you'd like to use.
If you'd only like to have a rich presence on while your pc is running I highly suggest you setup your rich presence with the config.json! If you'd rather chose to have your rich presence online 24/7 then use render.com for hosting and then select using .env to store your Discord-Token.

Going on now since you've selected your prefered hosting method.

### How to setup the config.json to store your discord-token!
It's quite easy for you to store your discord-token and the webhook functionalities.
```json
{
    "Authorization_Token": "Your-Discord-Token",
    "Webhook_ID": "Webhook-ID",
    "Webhook_Token": "Webhook-Token"
  }
```
You simply just replace "Your-Discord-Token" with your actual token.

### How to set up Discord Presence.
Head over to the Rich-Presence folder and navigate into the "presence-config.json" to start configuring your rich presence.
```json
{
    "applicationId": "Your-Application-ID",
    "activityType": "STREAMING", 
    "url": "https://www.twitch.tv/zensware",
    "state": "state",
    "name": "name",
    "details": "details",
    "largeImage": "image-address",
    "largeImageText": "image-text",
    "smallImage": "image-address",
    "smallImageText": "image-text",
    "buttons": [
      {
        "label": "My portfolio",
        "url": "https://www.zensware.com/"
      }
    ]
  }
```
The same process goes as before your simply replace the same values with your own ones.

## How to setup 24/7 hosting with "Render.com"
Go create an account for Render.com if you don't already have one. Then connect your github account for easier access to the forked repo that you did earlier.

### Creating a Webservice!
Go to your dashboard and navigate to top right corner and press new then web-service.

#### Choose your Github Repo from the Git Provider.
If you haven't connected your Github Account then use Public Git Repository and paste in your github repo link.

### Installion Guide on Render
Make sure you copy these settings for your Render application works with no complications..

#### Language: Node
#### Build Command: npm install
#### Start Command: node index.js

If you've decided to Environment as your storage option then please fill out on Render.
```env
Authorization_Token | Your-Discord-Token
Webhook_ID | Webhook-ID-Value
Webhook_Token | Webhook-Token-Value
```
Once done with everything you simply press "Deploy Web Service" 

## Getting your Web-service hosted 24/7.
Now that you have deployed your Web-Service you'll recieve a link which looks something like this "https://ApplicationName.onrender.com" Copy that link and go over to "cron-job.org" Login or Create an Account. In your Cronjob dashboard please create a new cronjob. 

Now to setup the cronjob paste the link from Render into the URL section. 
### Set the Execution Time to: 1 Minute
### Disable: "the cronjob will be disabled because of too many failures"
Then finish up and create the cronjob and you're now done with the guide and your rich presence should now be fully set up for 24/7 hosting. If you're still struggling with setting the rich presence up then head over to our discord server to get support

## Discord @ https://discord.gg/stWgVnBgHq
