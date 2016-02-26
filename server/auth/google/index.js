'use strict';

<<<<<<< HEAD
import express from 'express';
import passport from 'passport';
import {setTokenCookie} from '../auth.service';
=======
var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889

var router = express.Router();

router
  .get('/', passport.authenticate('google', {
    failureRedirect: '/signup',
    scope: [
<<<<<<< HEAD
      'profile',
      'email'
    ],
    session: false
  }))
  .get('/callback', passport.authenticate('google', {
    failureRedirect: '/signup',
    session: false
  }), setTokenCookie);

export default router;
=======
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ],
    session: false
  }))

  .get('/callback', passport.authenticate('google', {
    failureRedirect: '/signup',
    session: false
  }), auth.setTokenCookie);

module.exports = router;
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
