const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const textarea = form.querySelector("textarea");

    if (textarea.value.length < 10) {
        message.textContent = "Le message doit contenir au moins 10 caractères.";
        message.className = "error";
        return;
    }

    message.textContent = "Message envoyé avec succès ✅";
    message.className = "success";

    form.reset();
});
