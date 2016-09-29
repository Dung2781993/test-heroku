var express = require('express');
var parser = require('body-parser');
var express = require('express');
var parser = require('body-parser');
var app = express();
var reload = require('reload');
//var dataFile = require('./data/request.json');
var requestData = require('./app/data/request.json');
var request = require('request');
var app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use('/',function(req,res){
	res.send('<h1>Hello World</h1>')
});



request({
    contentType: "application/json",
    url: "https://polar-temple-76371.herokuapp.com/",
    method: "POST",
    json: requestData,   // <--Very important!!!
    //body: requestData
}, function (error, response, body){
    console.log(body);
});



app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});

