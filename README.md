<!DOCTYPE html>
<html>
<body>
<h2>ZenithRPC
  
<p>Discord RPC (Rich Presence) is a feature of the Discord API for developers. It allows detailed presence information to be displayed to users. This showcases personalized details about activities, status, and interactions within Discord or gaming.</p>
<img src="https://cdn.discordapp.com/attachments/1121661789042655283/1123381334392455299/RPC-Transparent.png" alt="RPC Example" style="display: block; margin: 0 auto;">
<div style="text-align: center;">
<h2>ZenithRPC: Promoting Your Work on Discord</h2>
<p>ZenithRPC is designed for creators aiming to promote their work on Discord. With a range of interactive features, it offers endless customization possibilities to share your creations globally.</p>
<p>Inspired by MrNekrozyYT, ZenithRPC builds upon their main RPC, adding features and enhancements to create a versatile experience.</p>
<h3>Zenith's Key Features</h3>
<ul>
<li>Set a custom Discord status with text and default images.</li>
<li>Add clickable buttons to your status for links to your website or social profiles.</li>
<li>Create custom profiles with images and titles.</li>
<li>Customize the application's theme to match your preferences.</li>
</ul>
<h3>Additional Features</h3>
<ul>
<li>Integration with Discord webhook for rich presence updates.</li>
<li>Calculates and displays client uptime in rich presence information.</li>
<li>Automatic presence updates every 30 seconds.</li>
<li>Client's presence/activity updated with webhook presence.</li>
</ul>
<h2>Optimal Application Usage</h2>
<p>Customize the application to your specifications:</p>
<h4>Discord Presence Configuration</h4>
<pre><code>.setApplicationId('Replace with your Application-ID')
.setType('LISTENING') // Options: STREAMING, PLAYING, LISTENING.
.setURL('https://twitch.tv/username') // Replace with your YouTube URL
.setState('Live Daily on Twitch')
.setName('Replace with your own name')
.setDetails('Replace with your own name')
.setStartTimestamp(Date.now()) // Omit for no Timestamp
</code></pre>
<h4>Discord Webhook Integration</h4>
<pre><code>.setColor('#545759') // Hexadecimal color code
.setTitle('ZenithRPC | Updater')
.setDescription('Announcing ZenithRPC\'s new client update feature.')
.addField('Discord Client:', client.user.tag, true) // Display account name
.addField('Client Uptime:', calculateUptime(), true) // Uptime function
.setThumbnail(client.user.displayAvatarURL()) // Account avatar as thumbnail
.setFooter('・Developer: zensware   ', client.user.displayAvatarURL()) // Footer text and bot avatar
.setTimestamp();
</code></pre>
<p>Replace values in index.js.</p>
<h2>Safety and Protection</h2>
<p>While violating terms may have minor consequences, the likelihood of account suspension is low.</p>
<h3>Webhook Protection</h3>
<p>Enhanced protection planned upon receiving 10 stars for the repository.</p>
<h3>Discord Token</h3>
<p>Rigorous measures ensure token safety. Store in Replit lock file for confidentiality. Sharing Replit project may compromise token.</p>
<h4>Obtaining and Storing Token</h4>
<p>Follow these steps to obtain your Discord token:</p>
<ol>
<li>Open Discord in your browser and access Developer Tools (CTRL + SHIFT + I).</li>
<li>In the Console tab, paste: <code>console.log(window.localStorage.token)</code> and copy the output.</li>
</ol>
<p>Tutorial on storing your Discord token: <a href="https://www.youtube.com/watch?v=JDS69hw4wB4">Tutorial Link</a></p>
</div>
</body>
</html>
