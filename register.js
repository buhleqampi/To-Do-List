 function validateForm(event) {
        event.preventDefault(); // Prevent form submission


        // Validation variables
        let isValid = true;
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const contactNumber = document.getElementById('contactNumber').value.trim();
        const password = document.getElementById('password').value;

        // Validation conditions
        if (firstName === '') {
            document.getElementById('firstNameError').textContent = 'Please enter your first name';
            isValid = false;
        } else {
            document.getElementById('firstNameError').textContent = '';
        }

        if (lastName === '') {
            document.getElementById('lastNameError').textContent = 'Please enter your last name';
            isValid = false;
        } else {
            document.getElementById('lastNameError').textContent = '';
        }

        if (email === '') {
            document.getElementById('emailError').textContent = 'Please enter your email address';
            isValid = false;
        } else {
            document.getElementById('emailError').textContent = '';
        }

        if (contactNumber === '') {
            document.getElementById('contactNumberError').textContent = 'Please enter your contact number';
            isValid = false;
        } else {
            document.getElementById('contactNumberError').textContent = '';
        }

        if (password === '') {
            document.getElementById('passwordError').textContent = 'Please enter a password';
            isValid = false;
        } else {
            document.getElementById('passwordError').textContent = '';
        }

        // If form is valid, submit it
        if (isValid) {
            document.getElementById('registrationForm').submit();
        }

        window.location.replace("login.html");
    }