var express = require("express");

var path = require("path");

var router = express.Router();

var db = require("../models/");

module.exports = function(app) {

          //should go into HTML-ROUTES.JS FILES*
      app.get("/classes/:class_name/:city", function(req, res) {
        db.Class.findOne({
          where: {
            class_name: req.params.class_name,
            city: req.params.city
          }
        })
          .then(function(dbClass) {
            //try travel secure exports.index res.render
            var hbsObject = { classes: dbClass };
            res.render('schedule', hbsObject);
            // res.render(path.join(__dirname, "../views/schedule.handlebars"));
            // res.json(dbClass);
          });
          });

          app.post("/api/buyers", function(req, res) {
            db.Buyer.create({
              buyer_name: req.body.buyer_name,
              buyer_email: req.body.buyer_email,
              contact_number: req.body.contact_number,
              contact_address: req.body.contact_address
            })
            .then(function(dbClass) {
              res.json(dbClass);
            });
          })

        
};



//Jane tried these 2 below but both crashed -- what is she missing
/*
var db = require("../models/class.js");
router.get("/api/:class_name/:city", function(req, res) {
  db.Class.findAll(function(data) {
    var hbsObject = {
      city: data
    };
    console.log(hbsObject);
    res.render("schedule", hbsObject);
  });
});

exports.index = function(req, res) {
  db.Class.findAll({
    where: {
      class_name: req.class_name,
      city: req.city
    }
  }).then(function(dbClass) {
    console.log(dbClass);
    res.render('schedule', {
      layout: 'main',
      schedule: dbClass
    });
  });
};
*/