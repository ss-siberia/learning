require("@babel/register");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3000;

const session = require("express-session");
const FileStore = require("session-file-store")(session);

const path = require("path");

app.use(express.static(path.join(process.cwd(), "public")));

const sessionConfig = {
  name: "newCookie",
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? "Секретное слово",
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 9999999, // * время жизни в мс (ms)
    httpOnly: true,
  },
};
// * Подключи сессии как мидлу
app.use(session(sessionConfig));

// Мидлварка для просмотра сессии
app.use((req, res, next) => {
  console.log("session=>", req.session);
  next();
});

const checkAdminMiddleware = require("./src/middlewares/checkAdmin");

const mainRouter = require("./src/routers/main.routers");
const usersRouter = require("./src/routers/users.router");
const profileRouters = require("./src/routers/profile.router");
const productRouters = require("./src/routers/products.routers");
const cartRouters = require("./src/routers/cart.router");

app.use("/", mainRouter);
app.use("/users", usersRouter);
app.use("/profile", profileRouters);
app.use("/products", productRouters);
app.use("/cart", cartRouters);

app.listen(PORT, () => {
  console.log(`Server starting on PORT ${PORT}`);
});
