// A GET route with the url /api/friends. 
//This will be used to display a JSON of all possible friends.



// A POST routes /api/friends.
//This will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic.

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
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });
};
