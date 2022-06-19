const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config({ path: __dirname + "/.env" });
// require("./Database/connection");
const port = process.env["PORT"] || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

require("./Routes/index")(app);

app.listen(port, (err) => {
  if (!err) {
    console.log("Server is listening on port " + port);
  }
});
