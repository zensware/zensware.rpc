const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`Free hosting at Uptimerobot.com!`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Server has initiated" + Date.now()) });
}
 
module.exports = keepAlive;
