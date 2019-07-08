var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var bodyParser = require("body-parser");


// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/catsController.js");

app.use(routes);


var app = express();
var port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log("Server is listening on http://localhost:" + port);
}); 



 