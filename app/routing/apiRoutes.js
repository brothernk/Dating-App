//Loads the friend data
var friendArray = require("../data/friends");

//Routing
module.exports = function(app) {
  
  //API GET
  app.get("/api/friends", function(request, response) {
    response.json(friendArray);
  });

  // API POST 
  app.post("/api/friends", function(request, response) {
 
    if (tableData.length < 5) {
      tableData.push(req.body);
      response.json(true);
    }
    else {
      waitListData.push(req.body);
      response.json(false);
    }
  });
};
