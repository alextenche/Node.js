'use strict';

var express = require('express');
var router = express.Router();
var nodemailer =  require('nodemailer');

router.get('/', function(req, res, next) {
  res.render('contact', {title: 'Contact'});
});

router.post('/send', function(req, res, next) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'emailToSend@gmail.com',
      pass: 'password'
    }
  });
  var mailOptions = {
    from: 'Alex Tenche <alex.tenche@gmail.com>',
    to: 'alex.tenche@gmail.com',
    subject: 'testing nodemailer',
    text: 'you have a new submision with the following details... Name: '
    + req.body.name + ' Email: ' + req.body.email + ' Message: ' + req.body.message,
    html: '<p>you got a new subbmision with the following details...</p><ul><li></li></ul>'
  };

  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.redirect('/');
      } else {
        console.log('message sent: ' + info.response);
        res.redirect('/');
      }
  });

  res.render('contact', {title: 'Contact'});
});

module.exports = router;
