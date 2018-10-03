// Require/import the HTTP module
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes");
var htmlRoutes = require(path.join(__dirname,  "app", "routing", "htmlRoutes.js"));
var apiRoutes = require(path.join(__dirname,  "app", "routing", "apiRoutes.js"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

apiRoutes(app, path);
htmlRoutes(app, path); // calling function that will route paths

// Define a port to listen for incoming requests
var PORT = process.env.PORT || 8080;

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});