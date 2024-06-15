// Java Script file
// Submitted by:
// Ambartzumov Nadezda 207267113
// Ohana Ron 206815557

function checkForm() {
    // Retrieve values from form fields
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPass = document.getElementById("confirmPass").value;

    // Regular expressions for validation
    let nameRegex = /^[A-Za-z]+$/; // Matches only letters
    let phoneRegex = /^\d{10}$/; // Matches exactly 10 digits
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Matches email address pattern

    let isCorrect = true; // Flag to track if form is valid

    // Validate password field
    if (password == "") {
        document.getElementById("displayError").innerHTML = "Password is empty";
        isCorrect = false;
    } else if (password.length < 8) {
        document.getElementById("displayError").innerHTML = "Password must be 8 characters long";
        isCorrect = false;
    } else {
        document.getElementById("displayError").innerHTML = "";
    }

    // Validate confirm password field
    if (confirmPass == "") {
        document.getElementById("displayError2").innerHTML = "Password verification is empty";
        isCorrect = false;
    } else if (password != confirmPass) {
        document.getElementById("displayError2").innerHTML = "Not same passwords";
        isCorrect = false;
    } else {
        document.getElementById("displayError2").innerHTML = "";
    }

    // Validate first name field
    if (!nameRegex.test(fname) || fname == "") {
        document.getElementById("fname").style.border = "2px solid red";
        isCorrect = false;
    } else {
        document.getElementById("fname").style.removeProperty('border');
    }

    // Validate last name field
    if (!nameRegex.test(lname) || lname == "") {
        document.getElementById("lname").style.border = "2px solid red";
        isCorrect = false;
    } else {
        document.getElementById("lname").style.removeProperty('border');
    }

    // Validate phone number field
    if (!phoneRegex.test(phone) || phone == "") {
        document.getElementById("phone").style.border = "2px solid red";
        isCorrect = false;
    } else {
        document.getElementById("phone").style.removeProperty('border');
    }

    // Validate email field
    if (!emailRegex.test(email) || email == "") {
        document.getElementById("email").style.border = "2px solid red";
        isCorrect = false;
    } else {
        document.getElementById("email").style.removeProperty('border');
    }

    // If all validations pass
    if (isCorrect) {
        // Remove the registration form from the page
        document.getElementById("registration").remove();
        // Display a success message to the user
        alert('Your registration completed successfully. Thank you!');
    }
}
