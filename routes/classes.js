var express = require('express');
var router = express.Router();

var classes_controller = require('../controllers/classes_controller');

router.get('/api/:class_name/:city', classes_controller.index);

router.post('/api/:class_name/:city/form', classes_controller.newClassRegistration);

module.exports = router; 