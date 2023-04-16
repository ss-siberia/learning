const { newUser } = document.forms;
const { loginUser } = document.forms;

// регистрация
newUser?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(newUser);

  try {
    const response = await fetch("/users/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(data)),
    });
    const result = await response.json();
    console.log(result);
    if (result.msg) {
      alert(result.msg);
    }
  } catch (error) {
    alert("ОШИБКА!!, ЗАПИСЬ НЕ СОЗДАЛАСЬ", error);
  }
});

// Авторизация
loginUser?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(loginUser);
  try {
    const response = await fetch("/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(data)),
    });
    const result = await response.json();
    console.log("result.isAdmin", result);
  } catch (error) {
    // alert('ОШИБКА ВЫ НЕ СМОГЛИ ВОЙТИ', error);
  }
});

// Выход из аккаунта
const logoutButton = document.querySelector(".logout");
logoutButton?.addEventListener("click", async () => {
  try {
    const response = await fetch("/users/logout");
    if (response.ok) {
      alert("успешно ралогинились");
    } else {
      alert("Ошибка");
    }
  } catch (error) {
    console.log(error);
  }
});
