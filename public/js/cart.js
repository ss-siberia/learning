// Добавление товара в корзину
const allProducts = document.querySelector(".all-product");

allProducts?.addEventListener("click", async (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const idProduct = e.target.closest("li").id;
    const priceProduct = e.target
      .closest("li")
      .querySelector(".product-price").textContent;
    console.log(idProduct, priceProduct);
    try {
      const response = await fetch("/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: idProduct,
          quantity: 1,
          priceForAllOneProduct: priceProduct,
        }),
      });
      const result = await response.json();

      if (response.ok) {
        alert("в корзине");
      }
    } catch (error) {
      alert("Ошибка создания товара в корзине", error);
    }
  }
});

// Удаление товара из корзины

// Покупка товары из корзины (удаление из корзины и алерт "Куплено")

// Подсчет общей суммы в корзине и тотчечно по одному товару
