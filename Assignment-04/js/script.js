const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-link');
const navBtn = document.getElementById('nav-btn');
const dynamicText = document.getElementById('animated-text');
const portfolioBtns = document.querySelectorAll('.btn-portfolio');
const counters = document.querySelectorAll('.counter');


const removeActiveClass = (arr) => {
    arr.forEach(item => {
        item.classList.remove('active');
    });
};


let prevScrollPos = 0;
window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY;
    if (window.scrollY === 0) {
        header.classList.remove('scroll-down');
    } else if (prevScrollPos > currentScrollPos) {
        header.style.top = '0';
    } else {
        header.style.top = `-${header.offsetHeight}px`;
        header.classList.add('scroll-down');
    }
    prevScrollPos = currentScrollPos;
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        removeActiveClass(navLinks);
        link.classList.add('active');
        document.getElementById('navbar').classList.remove('active');
    })
});

navBtn.addEventListener('click', () => {
    document.getElementById('navbar').classList.toggle('active');
});


const words = ['Designer', 'Developer', 'Blogger'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
// ?==> function than handle dynamicText
// const typeEffect = () => {
//     const currentWord = words[wordIndex];
//     const currentChar = currentWord.substring(0, charIndex);
//     dynamicText.textContent = currentChar;

//     if (!isDeleting && charIndex < currentWord.length) {
//         // If condition is true ,type the bext character
//         charIndex++;
//         setTimeout(typeEffect, 50);
//     } else if (isDeleting && charIndex > 0) {
//         // If condition is true ,remove the previous character
//         charIndex--;
//         setTimeout(typeEffect, 30);
//     } else {
//         // If word is deleted  then switch to the next word
//         isDeleting = !isDeleting;
//         wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
//         setTimeout(typeEffect, 1200);
//     }
// }
// typeEffect();



portfolioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        removeActiveClass(portfolioBtns);
        btn.classList.add('active');
    })
})


// ?==> fact counters handle effect
counters.forEach(count => {
    count.innerText = '0';
    const updateCounter = () => {
        const target = +count.getAttribute('data-target');
        const c = +count.innerText;
        const increment = target / 200;
        if (c < target) {
            count.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            count.innerText = target;
        }
    }
    updateCounter();
})

