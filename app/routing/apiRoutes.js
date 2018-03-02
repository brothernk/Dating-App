//Loads the friend data
var friends = require("../data/friends");

//Routing
module.exports = function(app) {
  
  //API GET
  app.get("/api/friendinfo", function(request, response) {
    response.json(friends);
  });

  // API POST 
  app.post("/api/friendinfo", function(request, response) {
    console.log("holla");
  });
};
