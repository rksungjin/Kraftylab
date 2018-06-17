var db = require('./../models'); //local file not a module

exports.index = function(req, res) {
  db.Class.findAll({
    where: {
      UserClass:req.body.class_name,
      UserCity: req.body.city
    }
  }).then(function(dbClass) {
    console.log(dbClass);

    //enter in from api-routes created in class with Aaron
    
    //need to confirm how to render html page - since we are not using handlebars. 

  });
};

exports.newClassRegistration = function(req, res) {
  db.Class.create({
    class_name: req.body.class_name,
    city: req.body.city,
    date: req.body.date,
    class_attendance: req.body.class_attendance
  }).then(function() {
    res.send({redirect: '/'});
  }).catch(function(err) {
    res.json(err);
  });

  // console.log(req.user);
  // // Add id from User onto req.body
  // req.body.UserId = req.user.id;

  // db.Trip.create(req.body).then(function(dbPost) {
  //   res.json(dbPost);
  // });
};

