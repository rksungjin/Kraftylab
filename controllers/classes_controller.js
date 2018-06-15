var db = require('../models');

exports.index = function(req, res) {

db.Classes.findAll({
    where: {
        ClassId: req.user.id
    }
}).then(function(classes) {
    console.log(dbClasses);
    res.render('classes/classes' , {

        layout: 'fill in modal',
        class: dbClasses
});

});

};

exports.createClass = function(req, res) {

    console.log(req.user);

    req.body.ClassId = req.user.id;

    db.Classes.create(req.body).then(function(dbClasses) {
        res.json(dbPost) // <--- ????
    }

}