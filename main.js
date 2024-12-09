document.addEventListener("DOMContentLoaded", () => {
    const buttonAuth = document.querySelector(".button-auth");
    const buttonOut = document.querySelector(".button-out");
    const userName = document.querySelector(".user-name");
    const modalAuth = document.querySelector(".modal-auth");
    const closeAuth = document.querySelector(".close-auth");
    const logInForm = document.querySelector("#logInForm");
    const loginInput = document.querySelector("#login");

    // Перевірка авторизації при завантаженні сторінки
    const storedLogin = localStorage.getItem("login");
    if (storedLogin) {
        userName.textContent = storedLogin;
        buttonAuth.style.display = "none";
        buttonOut.style.display = "inline-block";
    }

    // Відкрити модальне вікно
    buttonAuth.addEventListener("click", () => {
        modalAuth.classList.add("show");
    });

    // Закрити модальне вікно
    closeAuth.addEventListener("click", () => {
        modalAuth.classList.remove("show");
    });

    // Авторизація
    logInForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const login = loginInput.value.trim();
        if (!login) {
            loginInput.classList.add("error");
            return;
        }
        loginInput.classList.remove("error");
        localStorage.setItem("login", login);
        userName.textContent = login;
        modalAuth.classList.remove("show");
        buttonAuth.style.display = "none";
        buttonOut.style.display = "inline-block";
    });

    // Вийти
    buttonOut.addEventListener("click", () => {
        localStorage.removeItem("login");
        userName.textContent = "";
        buttonAuth.style.display = "inline-block";
        buttonOut.style.display = "none";
    });
});
