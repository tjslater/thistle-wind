/**
 * Socket.io configuration
 */
<<<<<<< HEAD
'use strict';

import config from './environment';
=======

'use strict';

var config = require('./environment');
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889

// When the user disconnects.. perform this
function onDisconnect(socket) {
}

// When the user connects.. perform this
function onConnect(socket) {
  // When the client emits 'info', this listens and executes
<<<<<<< HEAD
  socket.on('info', data => {
    socket.log(JSON.stringify(data, null, 2));
  });

  // Insert sockets below

}

export default function(socketio) {
=======
  socket.on('info', function (data) {
    console.info('[%s] %s', socket.address, JSON.stringify(data, null, 2));
  });

  // Insert sockets below
  require('../api/thing/thing.socket').register(socket);
}

module.exports = function (socketio) {
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
  // socket.io (v1.x.x) is powered by debug.
  // In order to see all the debug output, set DEBUG (in server/config/local.env.js) to including the desired scope.
  //
  // ex: DEBUG: "http*,socket.io:socket"

<<<<<<< HEAD
  // We can authenticate socket.io users and access their token through socket.decoded_token
=======
  // We can authenticate socket.io users and access their token through socket.handshake.decoded_token
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
  //
  // 1. You will need to send the token in `client/components/socket/socket.service.js`
  //
  // 2. Require authentication here:
  // socketio.use(require('socketio-jwt').authorize({
  //   secret: config.secrets.session,
  //   handshake: true
  // }));

<<<<<<< HEAD
  socketio.on('connection', function(socket) {
    socket.address = socket.request.connection.remoteAddress +
      ':' + socket.request.connection.remotePort;

    socket.connectedAt = new Date();

    socket.log = function(...data) {
      console.log(`SocketIO ${socket.nsp.name} [${socket.address}]`, ...data);
    };

    // Call onDisconnect.
    socket.on('disconnect', () => {
      onDisconnect(socket);
      socket.log('DISCONNECTED');
=======
  socketio.on('connection', function (socket) {
    socket.address = socket.handshake.address !== null ?
            socket.handshake.address.address + ':' + socket.handshake.address.port :
            process.env.DOMAIN;

    socket.connectedAt = new Date();

    // Call onDisconnect.
    socket.on('disconnect', function () {
      onDisconnect(socket);
      console.info('[%s] DISCONNECTED', socket.address);
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
    });

    // Call onConnect.
    onConnect(socket);
<<<<<<< HEAD
    socket.log('CONNECTED');
  });
}
=======
    console.info('[%s] CONNECTED', socket.address);
  });
};
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
