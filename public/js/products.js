const { newProduct } = document.forms;

// Добавление нового товара
newProduct?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(newProduct); // если тут выходит пустой объект, то делаем dataForReq (см. ниже)
  const dataForReq = Object.fromEntries(data.entries());
  console.log("Проверка на пустой объект", data, dataForReq);

  try {
    const response = await fetch("/products/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForReq),
    });
    const result = await response.json();
    if (result.msg) {
      alert(result.msg);
    } else {
      alert("Карточка создана");
      document.querySelectorAll("input").forEach((el) => (el.value = ""));
    }
  } catch (error) {
    alert("Ошибка создания карточки", error);
  }
});

// Удаление товара
const allProduct = document.querySelector(".all-product");
allProduct?.addEventListener("click", async (e) => {
  try {
    if (e.target.classList.contains("del-product")) {
      // const productId = e.target.dataset.productid;
      const productId = e.target.closest(".product");
      productId111 = productId.dataset.priceproduct;

      console.log(productId111, "productId111");
      const response = await fetch(`/products/${productId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        e.target.parentNode.parentNode.remove();
      }
    }
  } catch (error) {
    console.error(error);
    alert(`Ошибка удаления записи: ${error.message}`);
  }
});

// Редактирование товара
allProduct?.addEventListener("click", async (e) => {
  try {
    if (e.target.classList.contains("edit-product")) {
      const productLi = e.target.closest(".product");
      const productName = productLi.querySelector(".product-name");
      const productDescription = productLi.querySelector(
        ".product-description"
      );
      const productPrice = productLi.querySelector(".product-price");

      console.log(
        "объекты для добавления импута",
        productName.textContent,
        productName.textContent,
        productDescription.textContent
      );

      productName.innerHTML = `<input type="text" class="new-product-name" value="${productName.textContent}"/>`;
      productDescription.innerHTML = `<input class="new-product-description" value="${productDescription.textContent}"/>`;
      const price = parseInt(productPrice.textContent);
      productPrice.innerHTML = `<input type="number" class="new-product-price" value=${price}>`;

      const editButton = productLi.querySelector(".edit-product");
      editButton.innerText = "Сохранить изменения";
      editButton.classList.add("save-edited-product");
      editButton.classList.remove("edit-product");
    } else if (e.target.classList.contains("save-edited-product")) {
      const productId = e.target.dataset.productid;

      const productLi = e.target.closest(".product");
      const productNameInput =
        productLi.querySelector(".new-product-name").value;
      const productDescriptionInput = productLi.querySelector(
        ".new-product-description"
      ).value;
      const productPriceInput =
        productLi.querySelector(".new-product-price").value;

      const response = await fetch(`/products/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: productNameInput,
          description: productDescriptionInput,
          price: productPriceInput,
          id: productId,
        }),
      });

      if (response.ok) {
        console.log(
          1,
          productNameInput,
          productDescriptionInput,
          productPriceInput
        );
        const productName = productLi.querySelector(".product-name");
        const productDescription = productLi.querySelector(
          ".product-description"
        );
        const productPrice = productLi.querySelector(".product-price");

        console.log(2, productName, productDescription, productPrice);

        productName.innerText = productNameInput; // можно так и так)
        productDescription.innerText = productDescriptionInput;
        productPrice.innerText = productPriceInput;

        const editButton = productLi.querySelector(".save-edited-product");
        editButton.innerText = "Изменить товар";
        editButton.classList.remove("save-edited-product");
        editButton.classList.add("edit-product");
      }
    }
  } catch (error) {
    console.log(error);
  }
});
