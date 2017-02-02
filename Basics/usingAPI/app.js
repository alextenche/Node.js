'use srtict';

const https = require('https');

const username = "ned2000";

function printMessage(username, badgeCounts, points){
  const message = `${username} has ${badgeCounts} total badge(s) adn ${points} points in Javascript`;

  console.log(message);
}

const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
  console.dir(response);
  console.log(response.statusCode);
});
