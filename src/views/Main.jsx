const React = require("react");
const Layout = require("./Layout");

function Main({ userSession }) {
  return (
    <Layout userSession={userSession}>
      <h1 className="p-4 display-5">Главная страница</h1>
    </Layout>
  );
}

module.exports = Main;
