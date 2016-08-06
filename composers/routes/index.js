'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user');

// GET /login
router.get('/login', function(req, res, next){
  return res.render('login', { title: 'Log In'});
});

// POST /login
router.post('/login', function(req, res, next){
  if(req.body.email && req.body.password){
    User.authenticate(req.body.email, req.body.password, function(error, user){
      if(error || !user){
        var err = new Error('wrong email or password');
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });
  } else {
    var err = new Error('email and password are required');
    err.status = 401;
    return next(err);
  }
  return res.send('Logged In!');
});

// GET /register
router.get('/register', function(req, res, next){
  return res.render('register', { title: 'Sign Up'});
});

// POST /register
router.post('/register', function(req, res, next){
  if(req.body.email && req.body.name && req.body.favoriteBook && req.body.password && req.body.confirmPassword){

    // confirm password
    if(req.body.password !== req.body.confirmPassword){
      var err = new Error('passwords must match');
      err.status = 400;
      return next(err);
    }

    // insert into mongodb
    var userData = {
      email: req.body.email,
      name: req.body.name,
      favoriteBook: req.body.favoriteBook,
      password: req.body.password
    };

    User.create(userData, function (error, user) {
        if (error) {
          return next(error);
        } else {
          return res.redirect('/profile');
        }
      });

  } else {
    var err = new Error('all fields required');
    err.status = 400;
    return next(err);
  }
  return res.send('user created');
});

// GET /
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'Home' });
});

// GET /about
router.get('/about', function(req, res, next) {
  return res.render('about', { title: 'About' });
});

// GET /contact
router.get('/contact', function(req, res, next) {
  return res.render('contact', { title: 'Contact' });
});

module.exports = router;
