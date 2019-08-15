// Enter requirements / dependencies here

var express = require("express");
// this sets the initial port.. should I be setting this or heroku?
//answered using process.env.PORT allows heroku to choose and || says or use this port
var PORT = process.env.PORT || 8080;

var app = express();
var path = require("path")
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


// Sets up the Express app to handle data parsing--taken from in class assingment week 13 day 3 act 16  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);


// add in the port listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
    console.log("http://localhost:" + PORT);
  });