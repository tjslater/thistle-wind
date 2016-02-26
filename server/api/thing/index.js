'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
