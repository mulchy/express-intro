var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;

// where we will store data that is POSTed to the server
var data = [];

// add the bodyParser middleware
// this gives us access to the req.body object,
// which will contain the body data from the HTTP request itself
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// serve static files from the public directory
//
// note: if the server recieves a GET request for '/'
// *AND* an index.html file exists, it will be served
// ex. GET localhost:3000 -> index.html
app.use(express.static('public'));

// A route for handling POST requests to the root URL
app.post('/', function(req, res) {
  console.log('received a post request! req.body', req.body);
  data.push(req.body);
  console.log('contents of data=', data);
  res.send(data);
});

// A route for handling GET requests to '/cats'
app.get('/cats', function(req, res) {
  res.send('meow');
});

// Tell the server to listen for requests on the given port
app.listen(port, function(){
  console.log('Listening for requests on port:', port);
});
