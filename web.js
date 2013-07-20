require('fs');
var express = require('express');
var app = express();
var buffer = new Buffer(256);
app.use(express.logger());



app.get('/', function(request, response) {
  buffer.write(fs.readFile('~/index.html'));
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
