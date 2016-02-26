/**
 * Main application routes
 */

'use strict';

<<<<<<< HEAD
import errors from './components/errors';
import path from 'path';

export default function(app) {
  // Insert routes below
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

=======
var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));
  
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
<<<<<<< HEAD
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
}
=======
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
