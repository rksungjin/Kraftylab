var express = require('express');
var router = express.Router();

var classes_controller = require('../controllers/classes_controller');

router.get('/', classes_controller.index);

router.post('/new', classes_controller.newClassRegistration);

module.exports = router; 