module.exports = function(app){

    var application = require('./routes/application');
    var classes = require('./routes/classes');

    app.use('/', application);
    app.use('/classes', classes);

}