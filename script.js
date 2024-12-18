const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');


signUpButton.addEventListener('click', function() {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
});
signInButton.addEventListener('click', function() {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
});

const fNameInput = document.getElementById('fName');
const fNameError = document.getElementById('fNameError');
fNameInput.addEventListener('input', function() {
    const fNameValue = fNameInput.value;
    if (fNameValue.length > 15) {
        fNameError.style.display = 'inline';
    } else {
        fNameError.style.display = 'none';
    }
});

const lNameInput = document.getElementById('lName');
const lNameError = document.getElementById('lNameError');
lNameInput.addEventListener('input', function() {
    const lNameValue = lNameInput.value;
    if (lNameValue.length > 15) {
        lNameError.style.display = 'inline';  
    } else {
        lNameError.style.display = 'none'; 
    }
});

const submitSignUpButton = document.getElementById('submitSignUp');
submitSignUpButton.addEventListener('click', function(event) {
    const fNameValue = fNameInput.value;
    const lNameValue = lNameInput.value;
    if (fNameValue.length > 15 || lNameValue.length > 15) {
        event.preventDefault(); 
        alert("First and last name cannot be longer than 15 characters each.");
    }
});
