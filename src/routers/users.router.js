const router = require("express").Router();
const bcrypt = require("bcrypt");
const renderTemplate = require("../lib/renderTemplate");
const Registretion = require("../views/Registration");

const { User } = require("../../db/models");
const Login = require("../views/Login");

router.get("/registration", (req, res) => {
  renderTemplate(Registretion, {}, req, res);
});

router.get("/login", (req, res) => {
  renderTemplate(Login, {}, req, res);
});

router.post("/registration", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
