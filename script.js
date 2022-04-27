const password = document.querySelector("#password");
const password_confirm = document.querySelector("#password-confirm");
const error_message = document.querySelector(".password-error");
const form = document.querySelector("form");
const submitButton = document.querySelector('button[type="submit"]');

// Check when user types in confirm password field
password_confirm.addEventListener("input", () => {
    if (password.value !== password_confirm.value) {
        [password, password_confirm].forEach(e => {
            e.classList.add("error");
        });
        submitButton.classList.add("buttonDisabled");
        error_message.style["display"] = "block"
    } else {
        [password, password_confirm].forEach(e => {
            e.classList.remove("error");
            submitButton.classList.remove("buttonDisabled");
        });
        error_message.style["display"] = "none"
    }
});

// Check when user submits form
form.addEventListener("submit", e => {
    if (password.value !== password_confirm.value) {
        e.preventDefault();
    }
});