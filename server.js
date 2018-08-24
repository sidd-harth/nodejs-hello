var express = require('express');
var os = require("os");
//var cors = require('cors');
const PORT = 8080;
const app = express();

app.get('/', function (req, res) {
  res.send('Welcome to OpenShift!! My HostName is: ' + os.hostname() + '\n');
  console.log('HOSTNAME is' + os.hostname());

});

console.log('HOSTNAME is' + os.hostname());
app.listen(PORT,'0.0.0.0');
console.log('Running on http://localhost:' + PORT);
