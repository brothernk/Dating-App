//Dependencies
var express = require("express");
var bodyParser = require("body-parser");

//Express
var app = express();

//Port
var PORT = process.env.PORT || 8080;

//Parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Static Files
app.use(express.static('app/public'));
app.use(express.static('files'));

//Routing
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Start
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});