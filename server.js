var http = require('http');

http.createServer(function (req, res) {
  res.write("ZenithRPC is now online!");
  res.end();
}).listen(4000);
