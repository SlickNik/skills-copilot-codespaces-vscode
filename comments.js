// Create web server
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");

// Load comments from file
var comments = JSON.parse(fs.readFileSync("comments.json"));

// Middleware to parse body
app.use(bodyParser.json());

// Define the route for comments
app.get("/comments", function(req, res) {
  // Send back the comments
  res.json(comments);
});

// Define the route for adding a comment
app.post("/comments", function(req, res) {
  // Add the new comment to the array
  comments.push(req.body);
  // Save the comments back to the file
  fs.writeFileSync("comments.json", JSON.stringify(comments));
  // Send back a success message
  res.json({message: "Comment added"});
});

// Start the server
app.listen(3000, function() {
  console.log("Server is running on port 3000");
});