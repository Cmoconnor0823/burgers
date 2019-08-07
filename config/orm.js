// Import (require) connection.js into orm.js
var connection = require("../config/connection.js");

// In the orm.js file, create the methods that will execute
// the necessary MySQL commands in the controllers. 
// These are the methods you will need to use in order to 
// retrieve and store data in your database.

// Helper function for SQL syntax.
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }


// selectAll()
// insertOne()
// updateOne()


// Export the ORM object in module.exports.
module.exports = orm;




////******Look at week 14 day 3 activity 17 for dirrect instructions */