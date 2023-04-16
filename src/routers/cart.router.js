const router = require("express").Router();

const renderTemplate = require("../lib/renderTemplate");
const Cart = require("../views/Cart");

const { CartUser } = require("../../db/models");
const { Product } = require("../../db/models");

router.get("/", (req, res) => {
  renderTemplate(Cart, {}, req, res);
});

module.exports = router;
