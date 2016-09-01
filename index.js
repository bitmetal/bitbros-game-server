var express = require('express');
var app = express();
//var fs = require('fs');
var http = require('http').Server(app);
//var favicon = require('serve-favicon');
//var bodyParser = require('body-parser');

app.get('/', function(req, res) {
	res.send("Hello World!");
});

http.listen(3000, function(){
    console.log('Ready and listening on port ' + 3000 + "...");
});