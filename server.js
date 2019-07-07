var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var bodyParser = require("body-parser");


var app = express();
var port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log("Server is listening on http://localhost:" + port);
}); 



 