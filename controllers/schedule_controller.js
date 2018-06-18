var db = require('./../models');
exports.index = function(req, res) {
    // res.render('public/schedule');
    db.Class.findAll({
        where: {
          class_name:req.param.class_name,
          city: req.param.city   
        }
      }).then(function(dbClass) {
        console.log(dbClass);
        // res.render('public/schedule.html', {
        //     layout: 'schedule.html',
        //     trip: dbClass
        //   });
    
        //enter in from api-routes created in class with Aaron
        
        //need to confirm how to render html page - since we are not using handlebars. 
    
      });
};