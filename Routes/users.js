const express = require("express");
const router = express.Router();
const connection = require("../Database/connection");

router.get("/users", (req, res) => {
  res.send("This is the user section !!");
});

// insert data
router.post("/users/adduser", (req, res) => {
  const { fullname, email } = req.body;
  const insertdataSQL = `INSERT INTO users (fullname, email) VALUES ('${fullname}', '${email}')`;
  connection.query(insertdataSQL, (err) => {
    if (err) {
      return res.status(422).json({ error: err });
    }
    return res.status(200).json({ message: "Post data got successfully" });
  });
});

// fetch all data
router.get("/users/all", (req, res) => {
  const getAllUsersSQL = "SELECT * FROM users";
  connection.query(getAllUsersSQL, (err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    }
    return res.status(200).json({ data: result });
  });
});

module.exports = router;
