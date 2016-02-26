'use strict';

<<<<<<< HEAD
import express from 'express';
import passport from 'passport';
import config from '../config/environment';
import User from '../api/user/user.model';
=======
var express = require('express');
var passport = require('passport');
var config = require('../config/environment');
var User = require('../api/user/user.model');
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889

// Passport Configuration
require('./local/passport').setup(User, config);
require('./facebook/passport').setup(User, config);
require('./google/passport').setup(User, config);
require('./twitter/passport').setup(User, config);

var router = express.Router();

router.use('/local', require('./local'));
router.use('/facebook', require('./facebook'));
router.use('/twitter', require('./twitter'));
router.use('/google', require('./google'));

<<<<<<< HEAD
export default router;
=======
module.exports = router;
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
