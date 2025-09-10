document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("status");

    if(form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if(name && email && message) {
                status.textContent = "Thank you, your message has been sent!";
                form.reset();
            } else {
                status.textContent = "Please fill in all fields.";
            }
        });
    }
});
