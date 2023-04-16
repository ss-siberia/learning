const React = require("react");
const Layout = require("./Layout");

function Registretion({ userSession }) {
  return (
    <Layout userSession={userSession}>
      <h1 className="p-4 display-5">Регистрация</h1>
      <form className="p-4 border" name="newUser" style={{ maxWidth: 700 }}>
        <div className="mb-3">
          <label className="form-label">Имя</label>
          <input className="form-control" name="name" type="text" />
        </div>
        <div className="mb-3">
          <label className="form-label">Э/почта</label>
          <input className="form-control" name="email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Пароль</label>
          <input className="form-control" name="password" type="text" />
        </div>

        <div className="d-grid gap-2">
          <button className="registration-submit btn btn-success" type="submit">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </Layout>
  );
}

module.exports = Registretion;
