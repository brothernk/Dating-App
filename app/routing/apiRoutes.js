var friends = require("../data/friends");
module.exports = function(app) {

//API GET
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

//API POST
  app.post("/api/friends", function(req, res) {

    var mostCompatible = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };

    //Parse user's POST
    var userData = req.body;
    var userScores = userData.scores;

    var totalDifference;

    //Loop through all db options
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;

      console.log(currentFriend.name);

      //Loop through friend scores
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      if (totalDifference <= mostCompatible.friendDifference) {
        mostCompatible.name = currentFriend.name;
        mostCompatible.photo = currentFriend.photo;
        mostCompatible.friendDifference = totalDifference;
      }
    }

    //Save to db
    friends.push(userData);

    res.json(mostCompatible);
  });
};