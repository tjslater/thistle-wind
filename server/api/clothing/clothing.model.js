'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ClothingSchema = new mongoose.Schema({
  name: String,
  manufacturer: String,
  type: String,
  sizes: {},
  imgUrl: String,
  colors: []
});

export default mongoose.model('Clothing', ClothingSchema);
