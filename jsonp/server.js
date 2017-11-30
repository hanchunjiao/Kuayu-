// JavaScript Document
var express = require("express");
var app = express();
app.get("/index",function(req,res){
	res.send('callback({name:"ly"})')
})
app.listen(8888)
console.log("success8888")