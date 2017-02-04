'use srtict';

const https = require('https');
const username = "ned2000";

function printMessage(username, badgeCounts, points){
  const message = `${username} has ${badgeCounts} total badge(s) and ${points} points in Javascript`;

  console.log(message);
}

function getProfile(username) {
  const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    let body = '';
    
    response.on('data', data => {
      body += data.toString();
    });

    response.on('end', () => {
      const profile = JSON.parse(body);
      printMessage(username, profile.badges.length, profile.points.JavaScript);
    });
  });
}


const users = process.argv.slice(2);
users.forEach(getProfile);
