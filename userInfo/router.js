"use strict";

var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");

var commonHeader = {"Content-Type" : "text/html"};

// root
function home(request, response){
  if(request.url === "/"){
    if(request.method.toLowerCase() === "get"){
      response.writeHead(200, commonHeader);
      renderer.view("header", {}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    } else {
      request.on("data", function(postBody){
        var query = querystring.parse(postBody.toString());
        response.writeHead(303, {"Location" : "/" + query.username });
        response.end();
      });

    }
  }
}

// user
function user(request, response){
  var userName = request.url.replace("/", "");
  if(userName.length > 0){
    response.writeHead(200, commonHeader);
    renderer.view("header", {}, response);

    // get info
    var userInfo = new Profile(userName);
    userInfo.on("end", function(profileJSON){
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        userName: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }
      renderer.view("profile", values, response);
      renderer.view("footer", {}, response);
      response.end();
    });

    userInfo.on("error", function(error){
      renderer.view("error", {errorMessage: error.message}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    });


  }
}

module.exports.home = home;
module.exports.user = user;
