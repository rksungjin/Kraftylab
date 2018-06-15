
exports.index = function(req, res) {

    var db = require("../models");

module.exports = function(app) {
  app.get("/api/class", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Classes.findAll({
     include: [db.Classes]
    }).then(function(dbClasses) {
      res.json(dbClasses);
    });
  });

  app.get("/api/class/:class", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Classes.findOne({
      where: {
        ClassID: req.params.id
      },
      include: [db.Classes]
    }).then(function(dbClasses) {
      res.json(dbClasses);
    });
  });

  app.get("/api/class/:city", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Classes.findOne({
      where: {
        CityID: req.params.id
      },
    
    }).then(function(dbClasses) {
      res.json(dbClasses);
    });
  });
}
}