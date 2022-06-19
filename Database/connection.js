const mysql = require("mysql2");
require("dotenv").config({ path: __dirname + "/.env" });
const connection = mysql.createPool({
  host: process.env.DBHOST || "localhost",
  port: process.env.DBPORT || 3306,
  user: process.env.DBUSER || "root",
  database: process.env.DBNAME || "demodb",
  password: process.env.DBPASSWORD || "root",
});

module.exports = connection;
