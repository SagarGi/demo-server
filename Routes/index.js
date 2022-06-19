module.exports = (app) => {
  const userApi = require("../controller/users");
  const router = require("express").Router();

  router.all("/", (req, res) => {
    res.send("OK");
  });
  router.get("/users", userApi.getUserSection);
  router.get("/users/all", userApi.getAllUsers);
  router.post("/users/adduser", userApi.addUser);
  app.use("/", router);
};
