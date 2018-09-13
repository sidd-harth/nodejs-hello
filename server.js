const http = require('http');
const request = require('request');
const util = require('util');
var express = require('express');
var os = require("os");
//var cors = require('cors');
const PORT = 8080;
const app = express();
const url = "http://browser-service:8080"

var options = {
    url: url
};

app.get('/', function (req, res) {
  res.send('Welcome to OpenShift!! My HostName is: ' + os.hostname() + '\n');
  console.log('HOSTNAME is' + os.hostname());

});


app.get('/as', function (req, res) {
  res.send('check consoleeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
  console.log('HOSTNAME is' + os.hostname());
  
  request(options, function(err, response, body) {
    
        if(err){
        return console.log('Error:', err);
    }

    if(response.statusCode != 200){
           res.jsonp(response.statusCode,body);
    }

   var body2 = JSON.parse(JSON.stringify(body));

  console.log("body2 is," +body2);
  });
  

});

console.log('HOSTNAME is' + os.hostname());
app.listen(PORT,'0.0.0.0');
console.log('Running on http://localhost:' + PORT);
