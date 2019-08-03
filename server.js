// Enter requirements / dependencies here

var express = require("express");
//var path = require("path"); moved this to html routes pafe

var app = express();

// this sets the initial port.. should I be setting this or heroku?
//answered using process.env.PORT allows heroku to choose and || says or use this port
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing--taken from in class assingment week 13 day 3 act 16  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// require the route files
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// add in the port listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
    console.log("http://localhost:" + PORT);
  });