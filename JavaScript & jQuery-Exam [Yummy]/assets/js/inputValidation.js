const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const ageRegex = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;

// ^===> validate Functions
// @desc     Validation Name Input Field
const validateName = (input, alertDiv) => {
    const name = input.value.trim();
    if (name === '') {
        $(alertDiv).text('Username is required.').removeClass('d-none');
    } else if (nameRegex.test(name)) {
        $(alertDiv).text('').addClass('d-none');
        return true;
    } else {
        $(alertDiv).text('Special characters and numbers not allowed.').removeClass('d-none');
    }
    return false;
}

// @desc     Validation Email Input Field
const validateEmail = (input, alertDiv) => {
    const email = input.value.trim();
    if (email === '') {
        $(alertDiv).text('email is required.').removeClass('d-none');
    } else if (emailRegex.test(email)) {
        $(alertDiv).text('').addClass('d-none');
        return true;
    } else {
        $(alertDiv).text('Email not valid *exemple@yyy.zzz').removeClass('d-none');
    }
    return false;
}

// @desc     Validation Phone Input Field
const validatePhone = (input, alertDiv) => {
    const phone = input.value.trim();
    if (phone === '') {
        $(alertDiv).text('phone is required.').removeClass('d-none');
    } else if (phoneRegex.test(phone)) {
        $(alertDiv).text('').addClass('d-none');
        return true;
    } else {
        $(alertDiv).text('Enter valid Phone Number').removeClass('d-none');
    }
    return false;
}
// @desc     Validation Age Input Field
const validateAge = (input, alertDiv) => {
    const age = input.value.trim();
    if (age === '') {
        $(alertDiv).text('Your age is required.').removeClass('d-none');
    } else if (ageRegex.test(age)) {
        $(alertDiv).text('').addClass('d-none');
        return true;
    } else {
        $(alertDiv).text('Enter valid age.').removeClass('d-none');
    }
    return false;
}

// @desc     Validation Password Input Field
const validatePassword = (input, alertDiv) => {
    const password = input.value.trim();
    if (password === '') {
        $(alertDiv).text('Password is required.').removeClass('d-none');
    } else if (passwordRegex.test(password)) {
        $(alertDiv).text('').addClass('d-none');
        return true;
    } else {
        $(alertDiv).text('Enter valid password *Minimum eight characters, at least one letter and one number:*').removeClass('d-none');
    }
    return false;
}

// @desc     Validation Password Input Field
const validateRepassword = (input, password, alertDiv) => {
    const repassword = $(input).val().trim();
    if (repassword === '') {
        $(alertDiv).text('Repassword is required.').removeClass('d-none');
    } else if (repassword !== password) {
        $(alertDiv).text('Enter valid repassword').removeClass('d-none');
    } else {
        $(alertDiv).text('').addClass('d-none');
        return true;
    }

    return false;
}

// ^===> check validiton inputs
function handleInputsValidation() {
    let nameValid = false;
    let emailValid = false;
    let phoneValid = false;
    let ageValid = false;
    let passwordValid = false;
    let repasswordValid = false;

    clearInputs();

    $('#contactUs #nameInput').on("keyup", function () {
        const nameAlert = $('#contactUs #nameAlert');
        nameValid = validateName(this, nameAlert);
        validateForm(nameValid, emailValid, phoneValid, ageValid, passwordValid, repasswordValid)
    });

    $('#contactUs #emailInput').on("keyup", function () {
        const emailAlert = $('#contactUs #emailAlert');
        emailValid = validateEmail(this, emailAlert);
        validateForm(nameValid, emailValid, phoneValid, ageValid, passwordValid, repasswordValid)
    });

    $('#contactUs #phoneInput').on("keyup", function () {
        const phoneAlert = $('#contactUs #phoneAlert');
        phoneValid = validatePhone(this, phoneAlert);
        validateForm(nameValid, emailValid, phoneValid, ageValid, passwordValid, repasswordValid)
    });

    $('#contactUs #ageInput').on("keyup", function () {
        const ageAlert = $('#contactUs #ageAlert');
        ageValid = validateAge(this, ageAlert);
        validateForm(nameValid, emailValid, phoneValid, ageValid, passwordValid, repasswordValid)
    });

    $('#contactUs #passwordInput').on("keyup", function () {
        const passwordAlert = $('#contactUs #passwordAlert');
        passwordValid = validatePassword(this, passwordAlert);
        validateForm(nameValid, emailValid, phoneValid, ageValid, passwordValid, repasswordValid)
    });

    $('#contactUs #repasswordInput').on("keyup", function () {
        const passwordInputValue = $('#contactUs #passwordInput').val().trim();
        const repasswordAlert = $('#contactUs #repasswordAlert');
        repasswordValid = validateRepassword(this, passwordInputValue, repasswordAlert);
        validateForm(nameValid, emailValid, phoneValid, ageValid, passwordValid, repasswordValid)
    });
};


// ^===> handle submit button
function validateForm(nameValid, emailValid, phoneValid, ageValid, passwordValid, repasswordValid) {
    if (nameValid && emailValid && phoneValid && ageValid && passwordValid && repasswordValid) {
        $('#submitBtn').prop('disabled', false);
        $('#submitBtn').click(() => { submitContact() })
    } else {
        $('#submitBtn').prop('disabled', true);
    }
};

// ^===> clear inputs 
function clearInputs() {
    $('#contactUs input').each(function () {
        $(this).val('')
    });

    $('#contactUs .alert').each(function () {
        $(this).addClass('d-none')
    });
};

// ^===> submit Function
function submitContact() {
    clearInputs();
    alert('Your message has been successfully submitted. We will get back to you shortly.');
};

export { handleInputsValidation };