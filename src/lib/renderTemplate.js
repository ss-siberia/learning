require("@babel/register");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

module.exports = function renderTemplate(reactComponent, props, req, res) {
  const reactElement = React.createElement(reactComponent, {
    ...props,
    userSession: req.session?.user || "",
  });
  const html = ReactDOMServer.renderToStaticMarkup(reactElement);
  res.send(`<!DOCTYPE html>${html}`);
};
