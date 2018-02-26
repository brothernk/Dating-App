//Dependencies
var path = require("path");

//Routing
module.exports = function(app) {

//HTML GET
  app.get("/friends", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
