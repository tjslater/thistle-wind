'use strict';

<<<<<<< HEAD
import express from 'express';
import passport from 'passport';
import {signToken} from '../auth.service';
=======
var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889

var router = express.Router();

router.post('/', function(req, res, next) {
<<<<<<< HEAD
  passport.authenticate('local', function(err, user, info) {
    var error = err || info;
    if (error) {
      return res.status(401).json(error);
    }
    if (!user) {
      return res.status(404).json({message: 'Something went wrong, please try again.'});
    }

    var token = signToken(user._id, user.role);
    res.json({ token });
  })(req, res, next)
});

export default router;
=======
  passport.authenticate('local', function (err, user, info) {
    var error = err || info;
    if (error) return res.status(401).json(error);
    if (!user) return res.status(404).json({message: 'Something went wrong, please try again.'});

    var token = auth.signToken(user._id, user.role);
    res.json({token: token});
  })(req, res, next)
});

module.exports = router;
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
