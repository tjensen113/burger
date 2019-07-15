var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

 router.get("/", function(req,res){
     burger.selectAll(function(data){
         var hdbrsObj = {
             burgers: data
         };
         console.log(hdbrsObj);
         res.render("index",hdbrsObj);
     })
 })