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
// Object for all our SQL statement functions.

var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // insertOne()
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    // updateOne()
    // An example of objColVals would be {name: big mac, devoured: false}
    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }

        cb(result);
    
    });
}
// If a delete option is needed insert it here
};


// Export the ORM object in module.exports.
module.exports = orm;




////******Look at week 14 day 3 activity 17 for dirrect instructions */