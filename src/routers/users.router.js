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
    const { name, email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ msg: "Почта уже зарегистрирована" });
    } else {
      const hashPass = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        name,
        email,
        password: hashPass,
      });
      req.session.userName = newUser.name;
      req.session.userId = newUser.id;

      res.json(newUser);
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("newCookie");
    res.sendStatus(200);
  });
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      const passCheck = await bcrypt.compare(password, user.password);
      if (passCheck) {
        req.session.userName = user.name;
        req.session.userId = user.id;

        res.json({
          msg: "login ok",
          userName: user.name,
        });
      } else {
        res.json({ msg: "Не верный пароль" });
      }
    } else {
      res.json({ msg: "Почта не найдена" });
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
