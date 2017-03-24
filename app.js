var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));



app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

var request = require('request');

app.get('/wikipediaSearch', function(req, res){
  
  var searchTerm = req.query;
  console.log(req);


  var wikipediaURL = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm}&limit=10&namespace=0&format=json`;

request(wikipediaURL, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

res.send(response.body);

})

});

app.listen(port, function () {

  console.log('Example app listening on port 3000!');
  
});