const btnSubmit = document.getElementById('btnSubmit');
const phone = document.getElementById('phone');

let isPass = false, isEmail = false;

phone.addEventListener('input', (e) => {
    const inputValue = e.target.value;
    const onlyNumbers = /^\d*$/.test(inputValue);

    if (!onlyNumbers) {
        e.target.value = inputValue.replace(/\D/g, '');
    }
});


btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    const fName = document.getElementById('fName').value
    const lName = document.getElementById('lName').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const repassword = document.getElementById('rePassword').value
    const gender = document.querySelector('input[name="gender"]:checked').value
    const states = Array.from(document.querySelectorAll('input[name="status"]:checked')).map(checkbox => checkbox.value);
    const userSelect = document.getElementById('userSelect').value;
    phoneVal = phone.value

    const userObj = dataNotEmpty(fName, lName, phoneVal, email, password, repassword, gender, states, userSelect);
    if (isEmail && isPass) {
        saveDataLocalStorage(userObj);
        window.open('./dataUser.html', '_self');
    }
})

const emailValidator = (email) => {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validEmail) {
        isEmail = false;
        alert('pleate enter a valid email');
    } else {
        isEmail = true;
    }
}

const checkPasswordConfirm = (pass, repass) => {
    if (pass !== repass) {
        alert('password or re-password not correct');
    } else {
        return isPass = true;
    }
}

const dataNotEmpty = (fName, lName, phone, email, password, repassword, gender, states, userSelect) => {
    if (!fName || !lName || !phone || !email || !password || !repassword || !gender || !states || !userSelect) {
        alert('Please enter all your Data');
    } else {
        emailValidator(email);
        checkPasswordConfirm(password, repassword);

        return userDataObj = {
            fName,
            lName,
            phone,
            email,
            password,
            repassword,
            gender,
            states,
            userSelect
        }
    }
}

const saveDataLocalStorage = (userObj) => {
    localStorage.setItem('userObj', JSON.stringify(userObj));
}

