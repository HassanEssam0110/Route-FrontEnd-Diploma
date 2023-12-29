// ^=============== HTML ELEMENT ===============
const iconPassword = document.querySelector('.icon-password');

const loginForm = document.querySelector('#loginForm');
const loginInputEmail = document.querySelector('#loginInputEmail');
const loginInputPassword = document.querySelector('#loginInputPassword');
const btnLogin = document.querySelector('#btnLogin');

const singupForm = document.querySelector('#singupForm');
const singupInputName = document.querySelector('#singupInputName');
const singupInputEmail = document.querySelector('#singupInputEmail');
const singupInputPassword = document.querySelector('#singupInputPassword');
const btnSingup = document.querySelector('#btnSingup');

const btnLogout = document.querySelector('#btnLogout');
const home = document.querySelector('#home');


// ^=============== APP VARIABLES ===============
let users = getFromLocalStorage('users') || [];
let currentUser = getFromLocalStorage('currentUser') || { name: "", logged: false };

// ?====> regex patterns
// const namePattern = /^([a - zA - Z0 -9_\s]+)$/
const namePattern = /^[a-zA-Z]{3,20}$/
const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

// handle home page & welcome text
if (window.location.pathname === '/LoginSystem-JS/home.html') {
    currentUser.logged === false ? openWindow('index.html') : sayWelcome();
}

// ^=============== JS FUNCTIONS HELPERS ===============
function toggleClass(el, className, condition) {
    condition ? el.classList.add(className) : el.classList.remove(className);
}

function replaceClassCss(el, className1, className2) {
    el.classList.replace(className1, className2);
}

function setToLocalStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}

function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}


function validateInput(regex, element) {
    const valid = regex.test(element.value);
    toggleClass(element, "is-valid", valid);
    toggleClass(element, "is-invalid", !valid);
    return valid;
}

function openWindow(source) {
    window.open(source, '_self');
    // window.location.assign(source);
    // window.location.replace(`https://${location.hostname}/LoginSystem-JS/${source}`);
}


// ^=============== JS FUNCTIONS ===============
// ===> Handle show password or hidden.
function showPassword() {
    const inputPassword = document.querySelector('.input-password');
    if (iconPassword.classList.contains('icon-eye-blocked')) {
        replaceClassCss(iconPassword, 'icon-eye-blocked', 'icon-eye1');
        inputPassword.setAttribute('type', 'text');
    } else {
        replaceClassCss(iconPassword, 'icon-eye1', 'icon-eye-blocked');
        inputPassword.setAttribute('type', 'password');
    }
}


function singup() {
    const nameValid = validateInput(namePattern, singupInputName);
    const emailValid = validateInput(emailPattern, singupInputEmail);
    const passwordValid = validateInput(passwordPattern, singupInputPassword);
    const newUser = {
        name: singupInputName.value,
        email: singupInputEmail.value,
        password: singupInputPassword.value
    };

    if (nameValid && passwordValid && emailValid) {
        let userFounded = users.find(user => user.email === singupInputEmail.value);
        if (userFounded) {
            replaceClassCss(singupInputEmail, "is-valid", "is-invalid");
            document.querySelector('.email-feedback').innerHTML = "This email already exists";
            return false;
        }

        users.push(newUser); // add to user list
        setToLocalStorage('users', users); // add to local storage
        openWindow('index.html'); // open login window
    }
};


function login() {
    console.log('login start');
    const emailValid = validateInput(emailPattern, loginInputEmail);
    const passwordValid = validateInput(passwordPattern, loginInputPassword);
    const loginUser = {
        email: loginInputEmail.value,
        password: loginInputPassword.value
    }

    if (emailValid && passwordValid) {
        let userFounded = users.find(user => user.email === loginUser.email && user.password === loginUser.password);
        if (!userFounded) {
            console.log('not found user:', userFounded);
            replaceClassCss(document.querySelector('#invalidAuth'), 'd-none', 'd-block');
            return false;
        }

        currentUser.name = userFounded.name;
        currentUser.logged = true;
        setToLocalStorage('currentUser', currentUser); // add to local storage
        openWindow('home.html'); // open login window
    }
}

function logout() {
    currentUser.logged = false;
    setToLocalStorage('currentUser', currentUser); // add to local storage
    openWindow('index.html');
}

function sayWelcome() {
    // let fullName = currentUser.name.split(' ');
    document.querySelector('.user-avater').innerHTML = currentUser.name.charAt(0) + '' + currentUser.name.charAt(1);
    document.querySelector('.user-name').innerHTML += `<span class="fs-4">${currentUser.name}</span>`
}



// ^=============== EVENTS ===============
if (iconPassword) {
    iconPassword.addEventListener("click", () => showPassword());
}

if (loginForm) {
    btnLogin.addEventListener('click', () => login());
    // loginInputEmail.addEventListener('input', () => {
    //     validateInput(emailPattern, loginInputEmail);
    // })
    // loginInputPassword.addEventListener('input', () => {
    //     validateInput(passwordPattern, loginInputPassword);
    // })
};
if (singupForm) {
    btnSingup.addEventListener('click', () => singup());
    // singupInputName.addEventListener('input', () => {
    //     validateInput(namePattern, singupInputName);
    // });
    // singupInputEmail.addEventListener('input', () => {
    //     validateInput(emailPattern, singupInputEmail);
    // });
    // singupInputPassword.addEventListener('input', () => {
    //     validateInput(passwordPattern, singupInputPassword);
    // });
};

if (btnLogout) {
    btnLogout.addEventListener('click', () => logout())
}