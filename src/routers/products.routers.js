const express = require("express");

const router = express.Router();

const renderTemplate = require("../lib/renderTemplate.js");
const NewProduct = require("../views/products/NewProdict.jsx");
const AllProducts = require("../views/products/AllProducts.jsx");

const { Product } = require("../../db/models");
const { CartUser } = require("../../db/models");

router.get("/", async (req, res) => {
  renderTemplate(AllProducts, {}, req, res);
});

router.get("/new", (req, res) => {
  renderTemplate(NewProduct, {}, req, res);
});

module.exports = router;
