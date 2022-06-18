const mysql = require("mysql2");
require("dotenv").config({ path: __dirname + "/.env" });
const connection = mysql.createConnection({
  host: process.env["DBHOST"] || "localhost",
  // port: process.env["DBPORT"] || 3306,
  user: process.env["DBUSER"] || "user",
  database: process.env["DBNAME"] || "demodb",
  password: process.env["DBPASSWORD"] || "root",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connection created with mysql successfully!");
  }
});

module.exports = connection;
