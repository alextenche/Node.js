var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res) {
	var myGallery = [];
	var myPlanets = [];

	myPlanets = appdata.planets;
	appdata.planets.forEach( function (item) {
		myGallery = myGallery.concat(item.gallery);
	});
  	res.render('index', { 
  		title: 'Home',
  		gallery: myGallery,
  		planets: myPlanets,
  		page: 'home'
  	});
});

/* GET planets page. */
router.get('/planets', function (req, res) {
	var myGallery = [];
	var myPlanets = [];

	myPlanets = appdata.planets;
	appdata.planets.forEach( function (item) {
		myGallery = myGallery.concat(item.gallery);
	});
  	res.render('planets', { 
  		title: 'Planets',
  		gallery: myGallery,
  		planets: myPlanets,
  		page: 'planetsList'
  	});
});

/* GET planet detail page. */
router.get('/planets/:planetid', function (req, res) {
	var myGallery = [];
	var myPlanets = [];

	appdata.planets.forEach( function (item) {
		if(item.shortname == req.params.planetid) {
			myPlanets.push(item);
			myGallery = myGallery.concat(item.gallery);	
		}
	});
  	res.render('planets', { 
  		title: 'Planets',
  		gallery: myGallery,
  		planets: myPlanets,
  		page: 'planetDetail'
  	});
});


module.exports = router;
