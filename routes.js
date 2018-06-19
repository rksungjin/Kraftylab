module.exports = function(app){

    const application = require('./routes/application');
    //const classes = require('./routes/classes');
    const schedule = require('./routes/schedule')

    app.use('/', application);
    // app.use('/classes', classes);
    app.use('/', schedule);

}