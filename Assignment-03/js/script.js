const header = document.getElementById('header');
const logo = document.querySelector('#logo');
const navLinks = document.querySelectorAll('.nav-link');
const btnTop = document.getElementById('btn-up');
const btnNav = document.getElementById('btn-nav');
const boxSetting = document.getElementById('box-setting');


window.onscroll = () => {
    if (window.scrollY >= 100) {
        header.classList.add('header-scroll');
        logo.src = 'imgs/logo-bakery-02.png';
        btnTop.style.display = 'block';
        boxSetting.style.display = 'block';
    } else {
        header.classList.remove('header-scroll')
        logo.src = 'imgs/logo-bakery-light-01.png'
        btnTop.style.display = 'none';
        boxSetting.style.display = 'none';
    }
}



const loopRemoveActiveLinks = (arr) => {
    arr.forEach(item => {
        item.classList.remove('active');
    });
}

// ?==> handle navbar roter 
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        loopRemoveActiveLinks(navLinks);
        link.classList.add('active');
    });
});

btnNav.addEventListener('click', () => {
    document.getElementById('navbar').classList.toggle('active')
})


// ?==> Scroll Top button
btnTop.addEventListener('click', () => {
    // Scroll the window to the top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})
