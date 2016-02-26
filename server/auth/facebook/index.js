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
  .get('/', passport.authenticate('facebook', {
    scope: ['email', 'user_about_me'],
    failureRedirect: '/signup',
    session: false
  }))
<<<<<<< HEAD
  .get('/callback', passport.authenticate('facebook', {
    failureRedirect: '/signup',
    session: false
  }), setTokenCookie);

export default router;
=======

  .get('/callback', passport.authenticate('facebook', {
    failureRedirect: '/signup',
    session: false
  }), auth.setTokenCookie);

module.exports = router;
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
