const React = require("react");
const Layout = require("./Layout");

function Cart({ userSession, CartFromDB }) {
  return (
    <Layout userSession={userSession}>
      <main>
        <form className="shopping-cart" style={{ maxWidth: 1200 }}>
          <h2 className="mb-4">Корзина</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Наименование</th>
                <th>Количество</th>
                <th>Цена</th>
                <th>Итого</th>
                <th />
              </tr>
            </thead>
            <tbody id="cart-table" className="all-product-cart">
              {CartFromDB.map((el) => (
                <tr className="tr-item">
                  <td>{el["Product.name"]}</td>
                  <td className="for-change">
                    <input type="number" min="1" value={el.quantity} />
                  </td>
                  <td className="product-price">{el.price}</td>
                  <td className="product-total">{el.price}</td>
                  <td>
                    <button className="delete-cart btn btn-danger">
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}

              <tr>
                <td />
                <td />
                <td>Итого:</td>
                <td>Общая цена за все позиции руб.</td>
                <td />
              </tr>
            </tbody>
          </table>
          <div>
            <button className="buy btn btn-success mr-2">Купить</button>
          </div>
        </form>
      </main>
    </Layout>
  );
}

module.exports = Cart;
