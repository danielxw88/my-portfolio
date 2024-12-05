function toggleDetails(projectId) {
    let details = document.getElementById(projectId);
    if (details.style.display == "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }

}

document.addEventListener("DOMContentLoaded", function () {
    let form = this.getElementById("contactForm");
    let nameInput = this.getElementById("name");
    let emailInput = this.getElementById("email");
    let messageInput = this.getElementById("message");
    let nameError = this.getElementById("nameError");
    let emailError = this.getElementById("emailError");
    let messageError = this.getElementById("messageError");


    form.addEventListener("submit", function (event) {
        let formIsValid = true;
        if (nameInput.value.trim().length < 2) {
            nameError.style.display = "block";
            formIsValid = false;

        } else {
            nameError.style.display = "none";
        }

        const emailFormat=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$/;
        if (!emailFormat.test(emailInput.value.trim())) {
            emailError.style.display = "block";
            formIsValid = false;

        } else {
            emailError.style.display = "none";
        }

        if (messageInput.value.trim().length < 10) {
            messageError.style.display = "block";
            formIsValid = false;

        } else {
            messageError.style.display = "none";
        }

        if (!formIsValid) {
            event.preventDefault();
        }
    })

    
})

const toggleThemeButton = document.getElementById('toggleTheme');
toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
