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
  		page: 'planets'
  	});
});

/* GET planet with :planetid page. */
router.get('/planets/:planetid', function (req, res) {
	var myGallery = [];
	appdata.planets.forEach( function (item) {
		if(item.shortname == req.params.planetid) {
			myGallery = myGallery.concat(item.gallery);	
		}
		
	});
  	res.render('planets', { 
  		title: 'Planets',
  		gallery: myGallery
  	});
});


module.exports = router;
