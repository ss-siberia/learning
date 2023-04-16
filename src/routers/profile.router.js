const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate.js");
const Profile = require("../views/Profile.jsx");

router.get("/", async (req, res) => {
  renderTemplate(Profile, {}, req, res);
});

module.exports = router;
