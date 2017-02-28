'use strict';

const weather = require('./weather');

const query = process.argv.slice().join("_").replace(" ", "_");

weather.get(query);
