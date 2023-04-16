const React = require("react");
const Layout = require("../Layout");

module.exports = function Products({ userSession, productsFromDB }) {
  return (
    <Layout userSession={userSession}>
      <div>
        <h1 className="p-4 display-5">Все товары</h1>
        <ul className="all-product aproductll- list-unstyled">
          {productsFromDB.map((el) => (
            <li
              className="product border p-4"
              name="product"
              id={el.id}
              style={{ maxWidth: 550 }}
            >
              <div className="product-details">
                <h2 className="product-name h4 mb-1">{el.name}</h2>
                <p className="product-description mb-1">{el.description}</p>
                <div className="product-price text-danger h5">{el.price}</div>
                <div className="buttons-products">
                  <button className="add-to-cart btn btn-success">
                    Добавить в корзину
                  </button>
                  <button
                    className="del-product btn btn-danger"
                    data-productid={el.id}
                  >
                    Удалить товар
                  </button>
                  <button
                    className="edit-product btn btn-warning"
                    data-productid={el.id}
                  >
                    Изменить товар
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};
