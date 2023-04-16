const { newProduct } = document.forms;

// Добавление нового товара
newProduct?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(newProduct);
});

// Удаление товара

// Редактирование товара
