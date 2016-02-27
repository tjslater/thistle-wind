'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var TripSchema = new mongoose.Schema({
  destination: String,
  origin: String,
  isReturn: Boolean,
  departureDate: String,
  returnDate: String,
  hotel: String,
  address: String,
  phone: String,

});

export default mongoose.model('Trip', TripSchema);
