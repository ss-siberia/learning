// Добавление товара в корзину
const allProducts = document.querySelector(".all-product");

allProducts?.addEventListener("click", async (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const idProduct = e.target.closest("li").id;
    const priceProduct = e.target.closest("li");
    const priceProduct111 =
      priceProduct.querySelector(".product-price").textContent;

    console.log(priceProduct111, "priceProduct111");
    try {
      const response = await fetch("/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: idProduct,
          quantity: 1,
          priceForAllOneProduct: priceProduct111,
        }),
      });
      const result = await response.json();
      console.log("result", result);
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
