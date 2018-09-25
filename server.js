// Require/import the HTTP module
var http = require("http");
var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var routes = require("./app/routing/htmlRoutes");

// Define a port to listen for incoming requests
var PORT = 8080;

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Create a generic function to handle requests and responses
function handleRequest(request, response) {
  fs.readFile(__dirname + routes.surveyRoute, function (err, data) {
    if (err) {
      throw (err);
    }
    response.writeHead(200, {
      "Content-Type": "text/html"
    });
    response.end(data);
  });
}

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});