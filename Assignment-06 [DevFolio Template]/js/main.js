const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const btnTop = document.getElementById('btn-top');
const sections = document.querySelectorAll('section[id]')

//  ^========= Helper functions to toggle class ========= 
function toggleClass(element, className, condition) {
    if (condition) {
        element.classList.add(className);
    } else {
        element.classList.remove(className);
    }
}
function arrayRemoveclass(arr, className) {
    arr.forEach(ele => {
        toggleClass(ele, className, false)
    });
}

// ?========= Change Background ============
function scrollHeader() {
    toggleClass(navbar, 'nav-scrolled', this.scrollY >= 50)
}
window.addEventListener('scroll', scrollHeader);

// ?========= Add Active class to Navbar Links ============
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        arrayRemoveclass(navLinks, 'active')
        toggleClass(link, 'active', true);
        toggleClass(document.querySelector('.navbar-collapse'), 'show', false);
        document.querySelector('.navbar-toggler').setAttribute('aria-expanded', 'false');
    });
})


// ?========= Add Active class to Navbar Links ============
function showBtnTop() {
    toggleClass(btnTop, 'show', this.scrollY >= 100);
}
window.addEventListener('scroll', showBtnTop);




// ?========= Add NEEDS Validation FORM ============
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()


// ?========= SCROLL SECTION Active Link ============
/*
function scrollActive() {
    const scrollY = window.scrollY;
    arrayRemoveclass(document.querySelectorAll('a[data-bs-toggle="dropdown"]'), 'active');

    sections.forEach(current => {
        const sectionHegith = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        toggleClass(document.querySelector(`a[href*=${sectionId}]`), 'active', scrollY > sectionTop && scrollY <= sectionTop + sectionHegith)
    })
}
window.addEventListener('scroll', scrollActive);
*/