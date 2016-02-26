'use strict';

angular.module('socketMock', [])
  .factory('socket', function() {
    return {
      socket: {
        connect: function() {},
        on: function() {},
        emit: function() {},
        receive: function() {}
      },

      syncUpdates: function() {},
      unsyncUpdates: function() {}
    };
<<<<<<< HEAD
  });
=======
  });
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
