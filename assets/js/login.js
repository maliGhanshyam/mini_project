$(document).ready(function() {
    function validateField(field, errorElement, errorMessage) {
        const value = $(field).val().trim();
        if (value === '') {
            $(errorElement).text(errorMessage);
            return false;
        } else {
            $(errorElement).text('');
            return true;
        }
    }

    // Validate on form submission
    $('#login-form').on('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        let isValid = true;

        // Validate username and password
        if (!validateField('#username', '#username-error', 'Username is required.')) {
            isValid = false;
        }
        if (!validateField('#password', '#password-error', 'Password is required.')) {
            isValid = false;
        }

        // If valid, you can submit the form or perform an AJAX request
        if (isValid) {
            // Example of form submission
            alert('Form is valid! You can submit it now.');
            // Uncomment the line below to submit the form
            // this.submit();
        }
    });

    // Validate on field blur
    $('#username').on('blur', function() {
        validateField(this, '#username-error', 'Username is required.');
    });

    $('#password').on('blur', function() {
        validateField(this, '#password-error', 'Password is required.');
    });
});
