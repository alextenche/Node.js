"use strict";

var https = require("https");
var http =require("http");

// print out messages
function printMessage(userName, badgeCount, points){
  var message = userName + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

// print out error messages
function printError(error){
  console.error(error.message);
}


function get(userName){
  var request = https.get("https://teamtreehouse.com/" + userName + ".json", function(response){
    // console.log(response.statusCode);

    var body = "";
    response.on("data", function(chunk){
      body += chunk;
    });

    response.on("end", function(){
      if(response.statusCode === 200){
        try{
          var profile = JSON.parse(body);
          printMessage(userName, profile.badges.length, profile.points.JavaScript);
        } catch (error){
          printError(error);
        }
      } else {
        // status code error
        printError({message: "There was an error getting the profile for " + userName + ". (" + http.STATUS_CODES[response.statusCode] + ")" });
      }
    });
  });

  // connection error
  request.on("error", printError);
}

module.exports.get = get;
