const router = require("express").Router();

const renderTemplate = require("../lib/renderTemplate");
const Main = require("../views/Main");

router.get("/", (req, res) => {
  renderTemplate(Main, {}, req, res);
});

module.exports = router;
