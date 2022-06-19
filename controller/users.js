const express = require("express");
const connection = require("../Database/connection");

exports.getUserSection = (req, res) => {
  res.send("This is the user section !!");
};

exports.getAllUsers = (req, res) => {
  const getAllUsersSQL = "SELECT * FROM users";
  connection.query(getAllUsersSQL, (err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    }
    return res.status(200).json({ data: result });
  });
};

exports.addUser = (req, res) => {
  const { fullname, email } = req.body;
  const insertdataSQL = `INSERT INTO users (fullname, email) VALUES ('${fullname}', '${email}')`;
  connection.query(insertdataSQL, (err) => {
    if (err) {
      return res.status(422).json({ error: err });
    }
    return res.status(200).json({ message: "Post data got successfully" });
  });
};
