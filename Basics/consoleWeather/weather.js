'use strict';

const http = require('http');
const api = require('./api.json');

function printWeather(username, badgeCounts, points){
  const message = `current temperature in ${weather.location.city} is ${weather.current_observation.temperature_c} `;
  console.log(message);
}

function get(query){
  https.get(`http://api.wunderground.com/api/${api.key}/conditions/q/${query}.json`, response => {
    let body = "";

    response.on('data', chunk => {
      body += chunk
    });

    response.on('end', () => {
      const weather = JSON.parse(body);
      printWeather(weather);
    });

  });
}
