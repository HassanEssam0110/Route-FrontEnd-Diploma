// ^=============== HTML ELEMENT ===============
const playBtn = document.querySelector('#playBtn');
const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const colorsContainer = document.querySelector('#colorsContainer');
const winningColor = document.querySelector('#winningColor');

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
let selectedLevel = 'easy', correctAnswer = '';

// ^=============== JS FUNCTIONS HELPERS ===============
function toggleClass(el, className, condtion) {
    if (condtion) {
        el.classList.add(className)
    } else {
        el.classList.remove(className)
    }
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

function askQuestion(numCards) {
    let colors = [];
    for (let i = 0; i < numCards; i++) { colors.push(generatColor()) }
    correctAnswer = colors[randomNum(colors.length)];
    winningColor.innerHTML = correctAnswer;
    displayCards(colors);
}

function displayCards(colorsArray) {
    let lenght = colorsArray.length;
    colorsContainer.innerHTML = '';
    for (let i = 0; i < lenght; i++) {
        colorsContainer.innerHTML += `<div class="col-4"><div class="square rounded" style="background-color: ${colorsArray[i]};"></div></div>`
    }
}

// ^=============== JS FUNCTIONS ===============
// *=========== typed-Js ===========
var typed = new Typed('#typed', typedObj);

function start(numberQuestion) {
    askQuestion(numberQuestion);
    let cardsEl = document.querySelectorAll('.square');
    if (cardsEl) {
        cardsEl.forEach(card => card.addEventListener('click', (e) => {
            chekAnswer(e);
        }));
    }
}

function chekAnswer(e) {
    clickColor = e.target.style.backgroundColor;
    if (clickColor.trim() === correctAnswer.trim()) {
        // *=========== sweetalert2-JS ===========
        Swal.fire(sweetAlertObj)
            .then((result) => {
                if (result.isConfirmed) {
                    start(levels[selectedLevel].numOfCards);
                }
            });
    } else {
        e.target.style.opacity = '0';
    }
}

// ^=============== EVENTS ===============
playBtn.addEventListener('click', () => {
    start(levels[selectedLevel].numOfCards);
});

easyBtn.addEventListener('click', () => {
    toggleClass(easyBtn, 'active', true);
    toggleClass(hardBtn, 'active', false);
    selectedLevel = levels.easy.name;
});

hardBtn.addEventListener('click', () => {
    toggleClass(hardBtn, 'active', true);
    toggleClass(easyBtn, 'active', false);
    selectedLevel = levels.hard.name;
});