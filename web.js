var fs = require('fs');
var express = require('express');
var app = express();
var buffer = new Buffer(fs.readFileSync("index.html");
var mystring
app.use(express.logger());

mystring = buffer.toString();


app.get('/', function(request, response) {
  response.send(mystring);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
