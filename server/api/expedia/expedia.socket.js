/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Expedia = require('./expedia.model');

exports.register = function(socket) {
  Expedia.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Expedia.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('expedia:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('expedia:remove', doc);
}