//Dependencies
var path = require("path");

//Routing
module.exports = function(app) {

//HTML GET
  app.get("/survey", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("*", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/home.html"));
  });
};


var path = require("path");