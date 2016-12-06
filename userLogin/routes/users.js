'use strict';

var express = require('express');
var router = express.Router();

var User = require('../models/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.render('register', {
    'title': 'register'
  });
});

router.get('/login', function(req, res, next) {
  res.render('login', {
    'title': 'login'
  });
});

router.post('/register', function(req, res, next){
  let name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var confirmPassword = req.body.confirmPassword;

  // check for image fields
  if (req.files && req.files.profileImage) {
    console.log('uploading file');
    var profileImageOriginalName = req.files.profileImage.originalname;
    var profileImageName = req.files.profileImage.name;
    var profileImageMime = req.files.profileImage.mimetype;
    var profileImagePath = req.files.profileImage.path;
    var profileImageExtension = req.files.profileImage.extension;
    var profileImageSize = req.files.profileImage.size;
  } else {
    console.log('in else no image');
    var profileImageName = 'noImage.png';
  }

  // form validation
  req.checkBody('name', 'name field is required').notEmpty();
  req.checkBody('email', 'email field is required').notEmpty();
  req.checkBody('email', 'email is not valid').isEmail();
  req.checkBody('username', 'username field is required').notEmpty();
  req.checkBody('password', 'password field is required').notEmpty();
  req.checkBody('confirmPassword', 'passwords do not match').equals(req.body.password);

  // check for errors
  var errors = req.validationErrors();

  if (errors) {
    res.render('register', {
      errors: errors,
      name: name,
      email: email,
      username: username,
      password: password,
      confirmPassword: confirmPassword
    });
    // res.send(errors);
    // return;
  } else {
    var newUser = new User({
      name: name,
      email: email,
      username: username,
      password: password,
      profileimage: profileImageName
    });

    // create user
    User.createUser(newUser, function(err, user){
      if (err) {
        throw err;
      }
      console.log(user);
    });

    // success message
    req.flash('success', 'you are now register and may log in');
    res.location('/');
    res.redirect('/');
  }

});

module.exports = router;
