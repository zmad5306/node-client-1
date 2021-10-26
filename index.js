var express = require('express');
var app = express();
var os = require('os');
var http = require('http');

app.get('/', function(req, res) {
    var ajaxReq = http.get('http://localhost:8080/', (ajaxRes) => {
        var rawData = '';
        ajaxRes.on('data', (chunk) => { 
            rawData += chunk; 
        });
        ajaxRes.on('end', () => {
            res.send(`We have a message: ${rawData} on ${os.hostname()}`);
        });
        ajaxRes.on('error', (e) => {
            console.error(`Got error: ${e.message}`);
        });
        
    });
    
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
   
    console.log("Example app listening at http://%s:%s", host, port);
});