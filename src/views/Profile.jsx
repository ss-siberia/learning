const React = require("react");
const Layout = require("./Layout");

function Profile({ userSession }) {
  return (
    <Layout userSession={userSession}>
      <h1 className="p-4 display-5">Личный кабинет</h1>
      <ul className="list">
        <li>Имя пользователя:</li>
        <li>Email:</li>
      </ul>
    </Layout>
  );
}

module.exports = Profile;
