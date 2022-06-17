const express = require("express");
const app = express();
require("dotenv").config({ path: __dirname + "/.env" });
require("./Database/connection");
const port = process.env["PORT"] || 3000;

app.use("/", require("./Routes/api/users"));

app.listen(port, (err) => {
  if (!err) {
    console.log("Server is listening on port " + port);
  }
});
