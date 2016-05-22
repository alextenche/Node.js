"use strict";

var express = require("express");
var posts = require("./mock/posts.json");

var app = express();

app.get("/", function(req, res){
  res.send("<h3> working with express !! </h3>");
});

app.get("/blog/:title?", function(req, res){
  var title = req.params.title;
  if(title === undefined){
    res.status(503);
    res.send("Page not found");
  } else {
    var post = posts[title];
    res.send(post);
  }
});

app.listen(3000, function(){
  console.log("server running on port 3000");
});
