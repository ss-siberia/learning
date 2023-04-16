const { newUser } = document.forms;

// регистрация
newUser.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(newUser);
});

// Авторизация

// Выход из аккаунта
