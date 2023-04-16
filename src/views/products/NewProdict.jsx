const React = require("react");

const Layout = require("../Layout");

module.exports = function NewProduct({ userSession }) {
  return (
    <Layout userSession={userSession}>
      <h1 className="p-4 display-5">Добавить товар</h1>
      <form className="p-4 border" name="newProduct" style={{ maxWidth: 700 }}>
        <div className="mb-3">
          <label className="form-label">Название товара</label>
          <input className="form-control" name="name" type="text" />
        </div>
        <div className="mb-3">
          <label className="form-label">Описание товара</label>
          <textarea className="form-control" name="description" />
        </div>
        <div className="mb-3">
          <label className="form-label">Стоимость товара</label>
          <input className="form-control" name="price" type="number" />
        </div>

        <div className="d-grid gap-2">
          <button className="new-product-submit btn btn-success" type="submit">
            Добавить
          </button>
          <a href="/products" className="btn btn-primary">
            Перейти в каталог
          </a>
        </div>
      </form>
    </Layout>
  );
};
