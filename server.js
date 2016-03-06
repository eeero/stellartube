var express = require('express');

var app = express();
var PORT = process.env.PORT || 8080

app.use(express.static(__dirname + '/'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html')
});

app.listen(PORT, function() {
  console.log("Server is up and running on port: " + PORT)
});
