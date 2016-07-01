var alertStars = require("./lib/alertstars");
var _ = require("underscore");
var $ = require("jquery");

window.onload = function(){
  var messages = [
    "Welcome !",
    "To my new great page !",
    "Hope you have fun",
    "And don't forget to subscribe :)"
  ];

  _.each(messages, function(message){
    alertStars(message);
  });

  _.each(messages, function(message){
    $("body").append(message);
  });
}
