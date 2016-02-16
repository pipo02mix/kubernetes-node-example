var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World from ' + process.env.GET_HOSTS_FROM + '!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
