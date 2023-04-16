const { newProduct } = document.forms;

// Добавление нового товара
newProduct?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(newProduct);
  const formData = Object.fromEntries(data.entries());
  console.log("datadatadata", formData);

  try {
    const response = await fetch("/products/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    console.log("result", result);
    if (result.msg) {
      alert(result.msg);
    } else {
      // alert("Карточка создана");
      // document.querySelectorAll("input").forEach((el) => (el.value = ""));
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
      const productId = e.target.dataset.productid;
      console.log(productId, "productId");
      const response = await fetch(`/products/${productId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // чтобы был response.ok, нужно в ручке передавать res.json({});
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
        // чтобы был response.ok, нужно в ручке передавать res.json({});
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
        productDescription.innerHTML = `<p className="product-description">${productDescriptionInput}</p>`;
        productPrice.innerHTML = `<div className="product-price">${productPriceInput} руб.</div>`;

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
