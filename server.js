const http = require('http');
const request = require('request');
const util = require('util');
var express = require('express');
var os = require("os");
//var cors = require('cors');
const PORT = 8080;
const app = express();
const url = "http://browser-service:8080"

app.get('/', function (req, res) {
  res.send('Welcome to OpenShift!! My HostName is: ' + os.hostname() + '\n');
  console.log('HOSTNAME is' + os.hostname());

});

app.get('/browser', function (req, res) {
 
  console.log('insideeeeeeee');
   request.get(url, (error, res, body) => {
        return callback(error, res, body);
    });

});

console.log('HOSTNAME is' + os.hostname());
app.listen(PORT,'0.0.0.0');
console.log('Running on http://localhost:' + PORT);
