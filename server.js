//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express
var app = express();

//Port
var PORT = process.env.PORT || 8080;

//Parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Static Files
app.use(express.static('app/public'));
app.use(express.static('files'))

//Routing
app.get("/api/friends", function(request, response) {
  response.json(friend);
});

// Search for Table Requests - provides JSON
app.get("/api/:table?", function(req, res) {
  var chosen = req.params.table;
 
  if (chosen) {
    console.log(chosen);
 
    for (var i = 0; i < table.length; i++) {
      if (chosen === table[i].name) {
        return res.json(name[i]);
      }
    }
    return res.json(false);
  }
  return res.json(table);
 });
 
 
 app.post("/api/new", function(request, response) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newreservation = request.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newreservation.name = newreservation.name.replace(/\s+/g, "").toLowerCase();
 
  console.log(newreservation);
 
  characters.push(newreservation);
 
  res.json(newreservation);
 });

//HTML Routing
app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(request, response) {
  response.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("*", function(request, response) {
  response.sendFile(path.join(__dirname, "/app/public/home.html"));
});

//Start
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});