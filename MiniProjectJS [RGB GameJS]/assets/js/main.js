// ^=============== HTML ELEMENT ===============
const playBtn = document.querySelector('#playBtn');
const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const colorsContainer = document.querySelector('#colorsContainer');
const winningColor = document.querySelector('#winningColor');
const scoreEl = document.querySelector('.user-score');

// ^=============== APP VARIABLES ===============
const typedObj = {
    strings: ['Prees on <i class="text-color-second">PLAY</i>.', '&amp; make your <span class="text-bg-second">choice!!'],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
};
const sweetAlertObj = {
    title: "Congratulations! 🎉",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(./assets/img/trees.png)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("./assets/img/nyan-cat.gif")
      left top
      no-repeat
    `
};
const levels = {
    easy: {
        name: 'easy',
        numOfCards: 3,
    },
    hard: {
        name: 'hard',
        numOfCards: 6,
    }
};
let selectedLevel = 'easy', correctAnswer = '', score = 0;

// ^=============== JS FUNCTIONS HELPERS ===============
function toggleClass(el, className, condtion) {
    condtion ? el.classList.add(className) : el.classList.remove(className);
}

function randomNum(num) {
    return Math.trunc(Math.random() * num);
}

function generatColor() {
    let red = randomNum(255);
    let green = randomNum(255);
    let blue = randomNum(255);
    let color = `rgb(${red}, ${green}, ${blue}) `;
    return color;
}


// ^=============== JS FUNCTIONS ===============
// check score in local storage
(function () {
    let s = Number(localStorage.getItem('score'));
    if (s) { score = s; }
    scoreEl.innerHTML = score;
})();

// *=========== typed-Js ===========
var typed = new Typed('#typed', typedObj);

// Create a new colors and correct color.
function askQuestion(numCards) {
    let colors = [];
    for (let i = 0; i < numCards; i++) { colors.push(generatColor()) }
    correctAnswer = colors[randomNum(colors.length)];
    winningColor.innerHTML = correctAnswer;
    displayCards(colors);
}
// Render the cards with new colors.
function displayCards(colorsArray) {
    let length = colorsArray.length;
    colorsContainer.innerHTML = '';
    for (let i = 0; i < length; i++) {
        colorsContainer.innerHTML += `<div class="col-4"><div class="square rounded" style="background-color: ${colorsArray[i]};"></div></div>`
    }
}
// Check if answer is Correct or Not.
function chekAnswer(e) {
    clickColor = e.target.style.backgroundColor;
    if (clickColor.trim() === correctAnswer.trim()) {
        score++;
        scoreEl.innerHTML = score;
        localStorage.setItem('score', score);
        // *=========== sweetalert2-JS ===========
        Swal.fire(sweetAlertObj)
            .then((result) => {
                if (result.isConfirmed) { start(levels[selectedLevel].numOfCards); }
            });
    } else {
        e.target.style.opacity = '0';
    }
}
// Start Game.
function start(numberQuestion) {
    askQuestion(numberQuestion);
    let cardsEl = Array.from(document.querySelectorAll('.square'));
    if (cardsEl) {
        cardsEl.forEach(card => card.addEventListener('click', (e) => { chekAnswer(e); }));
    }
}
// ^=============== EVENTS ===============
const setLevel = (btn, level) => {
    toggleClass(btn, 'active', true);
    toggleClass(btn === easyBtn ? hardBtn : easyBtn, 'active', false);
    selectedLevel = level;
};

easyBtn.addEventListener('click', () => setLevel(easyBtn, levels.easy.name));
hardBtn.addEventListener('click', () => setLevel(hardBtn, levels.hard.name));
playBtn.addEventListener('click', () => start(levels[selectedLevel].numOfCards));