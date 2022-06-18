module.exports = (app) => {
  const userRoute = require("./users");

  app.all("/", (req, res) => {
    res.send("OK");
  });

  app.use("/", userRoute);
};
