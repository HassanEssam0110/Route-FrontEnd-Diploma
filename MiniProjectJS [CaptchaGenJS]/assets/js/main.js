// *================= HTML Elemments =================
const formCaptcha = document.getElementById('formCaptcha');
const capatchTextEl = document.getElementById('capatchText');
const capatchInput = document.getElementById('capatchInput');
const btnGenerator = document.getElementById('btnGenerator');
const btnCheck = document.getElementById('check');

// *================= APP Varibles =================
let captcaGenerated = "";
const chars = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+'];

// *================= Helpers =================
function randomNum(array) {
    return Math.trunc(Math.random() * array.length);
}

function generatCaptca(arr, num) {
    captcaGenerated = "";
    for (let i = 0; i < num; i++) {
        captcaGenerated += arr[randomNum(arr)];
    }
    capatchTextEl.textContent = captcaGenerated;
}

// *================= JS Functions =================
generatCaptca(chars, 6);
alertify.set('notifier', 'position');

function checkCaptca(captca, capatchInput) {
    const validFeedback = document.querySelector(".invalid-feedback");
    if (!capatchInput.value) {
        validFeedback.style.display = 'block'
        validFeedback.textContent = "Please enter captca"
        alertify.warning('Please enter the captcha.');

    } else if (capatchInput.value === captca) {
        alertify.notify('Congratulations! Captcha is correct. 🎉', 'success', 5);
        validFeedback.style.display = 'none';

    } else {
        alertify.notify('Invalid captcha. Please try again.', 'error', 5);
        validFeedback.style.display = 'block';
        validFeedback.textContent = "Invalid, Enter captcha correct."
    }
}

// *================= Events =================
btnGenerator.addEventListener('click', () => { generatCaptca(chars, 6); });

btnCheck.addEventListener('click', () => { checkCaptca(captcaGenerated, capatchInput); });
// capatchInput.addEventListener('blur', () => { checkCaptca(captcaGenerated, capatchInput); });

// ====> remove prevent from enter key 
capatchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        checkCaptca(captcaGenerated, capatchInput);
    }
});