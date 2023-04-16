const express = require("express");

const router = express.Router();

const renderTemplate = require("../lib/renderTemplate.js");
const NewProduct = require("../views/products/NewProdict.jsx");
const AllProducts = require("../views/products/AllProducts.jsx");

const { Product } = require("../../db/models");

router.get("/", async (req, res) => {
  const productsFromDB = await Product.findAll({ raw: true });
  renderTemplate(AllProducts, { productsFromDB }, req, res);
});

router.get("/new", (req, res) => {
  renderTemplate(NewProduct, {}, req, res);
});

router.post("/new", async (req, res) => {
  try {
    const { name, description, price } = req.body;
    console.log(name, description, price);
    const productExists = await Product.findOne({ where: { name } });
    if (productExists) {
      res.json({ msg: "Такой товар уже существует" });
    } else {
      const newProduct = await Product.create({
        name,
        description,
        price,
      });
      res.json(newProduct);
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Product.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const { id } = req.params;
    console.log("в ручке", name, description, price, id);

    const editProduct = await Product.update(
      {
        name,
        description,
        price,
      },
      { where: { id } }
    );

    res.json(editProduct);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
