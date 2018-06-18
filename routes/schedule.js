var express = require('express');
var router  = express.Router();

var schedule_controller = require('../controllers/schedule_controller');

// router.get('/schedule', schedule_controller.index);

router.get('/api/:class_name/:city', schedule_controller.index);

module.exports = router;