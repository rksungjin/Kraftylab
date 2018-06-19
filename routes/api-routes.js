var express = require("express");

var router = express.Router();

var db = require("./../models");

module.exports = function(app) {
    app.get("/api/:class_name/:city", function(req, res) {
        db.Class.findAll({
          where: {
            class_name: req.params.class_name,
            city: req.params.city
          }
        })
          .then(function(dbClass) {
            res.json(dbClass);
          });
      });
};

// router.get("/api/:class_name/:city", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     console.log("condition", condition);
  
//     Class.findAll({
//         db.Class.findAll({})
//         .then(function(dbClass) {
//           res.json(dbClass);
//         });
//     });
        
//       class: req.body.class_name
//     }, condition, function(result) {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });