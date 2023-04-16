const React = require("react");

module.exports = function Navbar({ userSession }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand btn btn-primary" href="/">
          Главная
        </a>
        <a className="navbar-brand btn btn-primary" href="/users/registration">
          Регистрация
        </a>
        <a className="navbar-brand btn btn-primary" href="/users/login">
          Авторизация
        </a>
        <button className="logout btn btn-danger">logout</button>
        <a className="navbar-brand btn btn-primary" href="/products/new">
          Добавить товар
        </a>
        <a className="navbar-brand btn btn-primary" href="/products/">
          Все товары
        </a>
        <a className="navbar-brand btn btn-primary" href="/cart">
          Корзина
        </a>
        <a className="navbar-brand btn btn-primary" href="/profile">
          Личный кабинет
        </a>
        <p className="text-danger h4">Привет, пользователь</p>
      </div>
    </nav>
  );
};
