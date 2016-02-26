/* global io */
'use strict';

angular.module('thistleWindApp')
  .factory('socket', function(socketFactory) {
<<<<<<< HEAD
=======

>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
    // socket.io now auto-configures its connection when we ommit a connection url
    var ioSocket = io('', {
      // Send auth token on connection, you will need to DI the Auth service above
      // 'query': 'token=' + Auth.getToken()
      path: '/socket.io-client'
    });

<<<<<<< HEAD
    var socket = socketFactory({ ioSocket });

    return {
      socket,
=======
    var socket = socketFactory({
      ioSocket: ioSocket
    });

    return {
      socket: socket,
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889

      /**
       * Register listeners to sync an array with updates on a model
       *
       * Takes the array we want to sync, the model name that socket updates are sent from,
       * and an optional callback function after new items are updated.
       *
       * @param {String} modelName
       * @param {Array} array
       * @param {Function} cb
       */
<<<<<<< HEAD
      syncUpdates(modelName, array, cb) {
=======
      syncUpdates: function (modelName, array, cb) {
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
        cb = cb || angular.noop;

        /**
         * Syncs item creation/updates on 'model:save'
         */
        socket.on(modelName + ':save', function (item) {
          var oldItem = _.find(array, {_id: item._id});
          var index = array.indexOf(oldItem);
          var event = 'created';

          // replace oldItem if it exists
          // otherwise just add item to the collection
          if (oldItem) {
            array.splice(index, 1, item);
            event = 'updated';
          } else {
            array.push(item);
          }

          cb(event, item, array);
        });

        /**
         * Syncs removed items on 'model:remove'
         */
        socket.on(modelName + ':remove', function (item) {
          var event = 'deleted';
          _.remove(array, {_id: item._id});
          cb(event, item, array);
        });
      },

      /**
       * Removes listeners for a models updates on the socket
       *
       * @param modelName
       */
<<<<<<< HEAD
      unsyncUpdates(modelName) {
=======
      unsyncUpdates: function (modelName) {
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
        socket.removeAllListeners(modelName + ':save');
        socket.removeAllListeners(modelName + ':remove');
      }
    };
  });
