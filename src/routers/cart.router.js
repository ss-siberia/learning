const router = require("express").Router();

const renderTemplate = require("../lib/renderTemplate");
const Cart = require("../views/Cart");

const { CartUser } = require("../../db/models");
const { Product } = require("../../db/models");

router.get("/", async (req, res) => {
  const { userId } = req.session;
  console.log(userId, "userIduserIduserId");
  const CartFromDB = await CartUser.findAll({
    where: { userId },
    include: {
      model: Product,
      attributes: ["name", "description"],
    },
    raw: true,
  });
  renderTemplate(Cart, { CartFromDB }, req, res);
});

router.post("/", async (req, res) => {
  const { productId, quantity, priceForAllOneProduct } = req.body;
  const { userId } = req.session;
  console.log("result222", req.body);
  try {
    const newCartUser = await CartUser.create({
      userId,
      productId,
      quantity,
      priceForAllOneProduct,
    });

    res.json(newCartUser);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
