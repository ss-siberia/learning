const React = require("react");
const Layout = require("./Layout");

function Login({ userSession }) {
  return (
    <Layout userSession={userSession}>
      <h1 className="p-4 display-5">Авторизация</h1>

      <form className="p-4 border" name="loginUser" style={{ maxWidth: 700 }}>
        <div className="mb-3">
          <label className="form-label">Э/почта</label>
          <input className="form-control" name="email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Пароль</label>
          <input className="form-control" name="password" type="text" />
        </div>

        <div className="d-grid gap-2">
          <button className="login-submit btn btn-success" type="submit">
            Авторизоваться
          </button>
        </div>
      </form>
    </Layout>
  );
}

module.exports = Login;
