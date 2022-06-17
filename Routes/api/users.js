const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from the server");
});

router.get("/users", (req, res) => {
  res.send("This is the user section !!");
});

module.exports = router;
