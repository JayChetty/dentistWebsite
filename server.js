var express = require('express')
var app = express();
var server = require('http').Server(app);
var path = require('path');

server.listen(process.env.PORT || 5000);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});