var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgersController.js");

// app.use(routes());


app.listen(PORT,function(){
    console.log("Server is listening on http://localhost:" + PORT);
    
}); 



 