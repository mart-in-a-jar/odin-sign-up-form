const password = document.querySelector("#password");
const password_confirm = document.querySelector("#password-confirm");
const error_message = document.querySelector(".password-error");

password_confirm.addEventListener("input", () => {
    if (password.value != password_confirm.value) {
        [password, password_confirm].forEach(e => {
            e.classList.add("error");
        });
        error_message.style["display"] = "block"
    } else {
        [password, password_confirm].forEach(e => {
            e.classList.remove("error");
        });
        error_message.style["display"] = "none"
    }
});