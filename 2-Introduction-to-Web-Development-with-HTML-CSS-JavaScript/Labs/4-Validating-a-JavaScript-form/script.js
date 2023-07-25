/* Create references to the input elements we wish to validate */
let username = document.getElementById("name");
let email = document.getElementById("email");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let alertMessage = document.getElementById("alertMessage");

/* Function to perform some operations whenever the form fields are not upto the validation */
function performOperations(message, formElement) {
    alertMessage.innerText = message;
    alertMessage.style.display = "block";
    setTimeout(function() {
        alertMessage.style.display = "none";
    }, 3000);
    formElement.focus();
}

/* Function to perform the validation for the form fields */
function formValidation() {
    /* Check if name field is empty */
    if(username.value === "") {
        performOperations("Please enter the name", username);
        return false;
    }

    /* Check if email field is empty */
    if(email.value === "") {
        performOperations("Please enter the email", email);
        return false;
    }

    /* Check if password field is empty */
    if(password1.value === "") {
        performOperations("Please enter the password", password1);
        return false;
    }

    /* Check if both the passwords match */
    if(password1.value !== password2.value) {
        performOperations("Passwords do not match", password2);
        return false;
    }

    /* If all is well return true */
    return true;
}

/* Get the form element, add a 'submit' event-listener, validate the form fields, and perform the operations after the form is submitted */
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    /* Call function to perform the validation */
    if(formValidation()) {
        const userData = {
            name: username.value,
            email: email.value,
            password: password1.value
        }
        console.log("User Data:", userData);
    } else {
        console.log("Error in fetching user data");
    }
});