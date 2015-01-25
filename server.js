var express = require('express');
var app = express();

var counter = 0;

app.get('/', function (req, res) {
  counter++;
  res.json({hello: 'world',
  counter: counter
});
});

var server = app.listen(3000, function () {
  console.log('server is listening on port', server.address().port);
});
