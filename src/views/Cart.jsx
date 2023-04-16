const React = require("react");
const Layout = require("./Layout");

function Cart({ userSession }) {
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
              <tr className="tr-item">
                <td>Название товара</td>
                <td className="for-change">
                  <input type="number" min="1" value="Кол-во товара" />
                </td>
                <td className="product-price">Цена за штуку</td>
                <td className="product-total">Общая цена за позицию</td>
                <td>
                  <button className="delete-cart btn btn-danger">
                    Удалить
                  </button>
                </td>
              </tr>

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
