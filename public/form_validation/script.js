var nameError = document.getElementById('nameErr');
var phoneError = document.getElementById('phoneErr');
var emailError = document.getElementById('mailErr');
var messageError = document.getElementById('msgErr');
var submitError = document.getElementById('submitErr');


function validateName() {
    var nam = document.getElementById('contact-name').value;
    if (nam.length === 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    } else if (!nam.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    } else {
        nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
        return true;
    }
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;
    if (phone.length === 0) {
        phoneError.innerHTML = 'Phone no. is required';
        return false;
    } else if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    } else if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits please';
        return false;
    } else {
        phoneError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
        return true;
    }
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length === 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    } else if (!email.match(/^[A-Za-z0-9._-]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
        emailError.innerHTML = 'Invalid email';
        return false;
    } else {
        emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
        return true;
    }
}

function validateMsg() {
    var msg = document.getElementById('contact-msg').value;
    var required = 30;
    var left = required - msg.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    } else {
        messageError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
        return true;
    }
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMsg()) {
        submitError.style.display = 'block'
        submitError.innerHTML = `Please fix error to submit`
        setTimeout(function () {
            submitError.style.display = 'none';
        }, 3000)
        return false
    }
}