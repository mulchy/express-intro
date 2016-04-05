var express = require('express');
var path = require('path');

var app = express();
var port = 3000;

app.listen(port, function(){
  console.log('Listening for requests on port:' + port);
});

function handleGet(req, res) {
  console.log('received a request!');
  res.sendFile(path.join(__dirname, './index.html'));
}

// http://localhost:port/
app.get('/', handleGet);

app.post('/', function(req, res) {
  console.log('received a post request!');
  res.sendStatus(204);
});

app.get('/cats', function(req, res) {
  res.send('meow');
});
