'use strict';

var _ = require('lodash');
var Expedia = require('./expedia.model');
var creds = require('./expedia.credentials').data;
var request = require('request');



exports.geoSearch = function(req, res) {



}

exports.getFlights = function(req, res) {

}


function handleError(res, err) {
  return res.status(500).send(err);
}