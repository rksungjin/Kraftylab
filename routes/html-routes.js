var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // authors route loads author-manager.html
  app.get("/schedule", function(req, res) {
    res.render(path.join(__dirname, "../public/schedule"));
  });



  //Next Step: add book.html for class booking (after schedule.html appears, user hits 'Book Now')

  // app.get("/form", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/form.html"));
  // });

};