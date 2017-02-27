'use strict';

const http = require('http');
const https = require('https');
const username = "ned2000";


function printMessage(username, badgeCounts, points){
  const message = `${username} has ${badgeCounts} total badge(s) and ${points} points in Javascript`;

  console.log(message);
}

function printError(error){
  console.error(error.message);
}

function get(username) {
  try {
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {

      if (response.statusCode === 200) {
        let body = '';

        response.on('data', data => {
          body += data.toString();
        });

        response.on('end', () => {
          try {
            const profile = JSON.parse(body);
            printMessage(username, profile.badges.length, profile.points.JavaScript);
          } catch (error) {
            printError(error);
          }
        });
      } else {
        const message = `there was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
        const statusCodeError = new Error(message);
        printError(statusCodeError);
      }
    });

    request.on('error', error => console.error(`problem with request ${error.message}`) );
  } catch(error) {
    printError(error);
  }
}

module.exports.get = get;
