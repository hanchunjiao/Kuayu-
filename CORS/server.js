var express = require("express");
var app = express();
app.get("/index",function(req,res){
	//后端给前端访问请求
	res.append('Access-Control-Allow-Origin','*');
	
	res.send("123")
})
app.listen(8882)
console.log("success8882")