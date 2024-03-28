function validateForm(event) {
    // Prevents  the form from being submitted
    event.preventDefault(); 

    var userNameInput = document.getElementById("userName");
    var passwordInput = document.getElementById("password");
    var userNameError = document.getElementById("userNameError");
    var passwordError = document.getElementById("passwordError");

    userNameError.textContent = "";
    passwordError.textContent = "";

    // Perform validation
    var isValid = true;

    // Username validation
    if (userNameInput.value.trim() === "") {
        userNameError.textContent = "Username is required";
        isValid = false;
    }

    // Password validation
    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    }

    // If form is valid, submit the form and redirect to index.html
    if (isValid) {
    
        window.location.replace("index.html");
    }
}
