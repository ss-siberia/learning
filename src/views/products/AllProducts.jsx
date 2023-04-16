const React = require("react");
const Layout = require("../Layout");

module.exports = function Products({ userSession }) {
  return (
    <Layout userSession={userSession}>
      <div>
        <h1 className="p-4 display-5">Все товары</h1>
        <ul className="aproductll- list-unstyled">
          <li
            className="product border p-4"
            name="product"
            style={{ maxWidth: 550 }}
          >
            <div className="product-details">
              <h2 className="product-name h4 mb-1">Имя товара</h2>
              <p className="product-description mb-1">Описание товара</p>
              <div className="product-price text-danger h5">Цена товара</div>
              <div className="buttons-products">
                <button className="add-to-cart btn btn-success">
                  Добавить в корзину
                </button>
                <button className="del-product btn btn-danger">
                  Удалить товар
                </button>
                <button className="edit-product btn btn-warning">
                  Изменить товар
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  );
};
