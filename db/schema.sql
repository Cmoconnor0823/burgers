-- Write SQL queries this file that do the following:



-- Create the burgers_db.
    CREATE DATABASE burgers_db;


-- Switch to or use the burgers_db.
    USE burgers_db;

-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
    CREATE TABLE  burgers_table (
        id int NOT NULL AUTO_INCREMENT,
        burger_name VARCHAR(255) NOT NULL,
        devoured boolean NOT NULL,
        PRIMARY KEY (id)
    );




