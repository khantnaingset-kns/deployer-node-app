'use strict';

const express = require("express");
const app = express();

require("dotenv").config();
(() => {
  app.get("/health-check", (req, res) => {
    res.status(200).json({ status: "Up and Running" });
  });

  app.get("/", (req, res) => {
    res.json({ message: "Welcome to deployer workshop" });
  });

  app.listen(process.env.PORT, () => {
    console.log("listening on port " + process.env.PORT);
  });
})();
