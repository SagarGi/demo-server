const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: __dirname + "/.env" });

// require("./Database/connection");
const port = process.env["PORT"] || 3001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

require("./Routes/index")(app);

app.listen(port, (err) => {
  if (!err) {
    console.log("Server is listening on port " + port);
  }
});
