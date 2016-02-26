'use strict';

<<<<<<< HEAD
var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ThingSchema = new mongoose.Schema({
=======
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
  name: String,
  info: String,
  active: Boolean
});

<<<<<<< HEAD
export default mongoose.model('Thing', ThingSchema);
=======
module.exports = mongoose.model('Thing', ThingSchema);
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
