//Loads the friend data
var friends = require("../data/friends.js");

//Routing
module.exports = function(app) {
  
  //API GET
  app.get("/api/friends", function(request, response) {
    response.json(friends);
  });

  // API POST 
  app.post("/api/friends", function(request, response) {

    var newFriend = request.body;
    var mostCompatible = {
      name: "",
      image: "",
      score: 1000
    };

    for (var i = 0; i < friends.length; i ++){
      var difference = (friends[i].score) - (newFriend.score);

      if (difference <= mostCompatible.score){
        mostCompatible.name = friends[i].name;
        mostCompatible.image = friends[i].image;
        mostCompatible.score = difference;
      }
    }

    friends.push(newFriend);
    response.json(mostCompatible);

  });
};
