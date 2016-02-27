/**
 * Clothing model events
 */

'use strict';

import {EventEmitter} from 'events';
var Clothing = require('./clothing.model');
var ClothingEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ClothingEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Clothing.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ClothingEvents.emit(event + ':' + doc._id, doc);
    ClothingEvents.emit(event, doc);
  }
}

export default ClothingEvents;
