'use strict';

var express = require('express');
var controller = require('./expedia.controller');

var router = express.Router();

router.get('/geo/:search', controller.geoSearch);
//router.get('/flights')

module.exports = router;