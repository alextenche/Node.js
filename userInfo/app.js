"use strict";

var router = require("./router.js");
var renderer = require("./renderer.js");
var port = 3000;
var http = require('http');

http.createServer(function(request, response){
  router.home(request, response);
  router.user(request, response);
}).listen(port);
console.log("Server running on port " + port);
