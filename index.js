var express = require('express');
const fetch = require('node-fetch');
var app = express();

app.get('/', function(req, res){
  res.send('Go to /test to start the test');
});

app.get('/test', function(req, res){

    //here I'm trying to GET /data and decode the result, but i get a timout
  fetch('/data')
    .then(resp => resp.json())
    .then(data => res.send("Got the following: ", JSON.stringify(data)));
});

app.get('/data', function(req, res){
  res.json({ some: 'data'});
});

app.listen(8080);