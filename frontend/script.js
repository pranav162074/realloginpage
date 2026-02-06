function togglePassword(el) {
    const password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
        el.textContent = "🙈";
    } else {
        password.type = "password";
        el.textContent = "👁️";
    }
}