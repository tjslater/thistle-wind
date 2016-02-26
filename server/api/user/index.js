'use strict';

<<<<<<< HEAD
import {Router} from 'express';
import * as controller from './user.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();
=======
var express = require('express');
var controller = require('./user.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889

router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);

<<<<<<< HEAD
export default router;
=======
module.exports = router;
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
