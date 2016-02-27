'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var TripSchema = new mongoose.Schema({
  destination: String,
  origin: String,
  isReturn: Boolean,
  departure: String,
  return: String,
  hotel: String,
  address: String

});

export default mongoose.model('Trip', TripSchema);
