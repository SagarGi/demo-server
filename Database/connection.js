const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user:'root',
  database:'demodb',
  password: "root",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connection created with mysql successfully!");
  }
});

module.exports = connection;
