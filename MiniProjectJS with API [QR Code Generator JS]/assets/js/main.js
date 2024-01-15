const wrapper = document.querySelector('.wrapper');
const generateBtn = wrapper.querySelector('.form button');
const qrInput = wrapper.querySelector('.form input');
const qrImg = wrapper.querySelector('.qr-code img');

generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    generateBtn.innerText = 'Generating...';
    // getting a QR code of user entered value using the qr server api and passing the img src. 
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener('load', () => {
        wrapper.classList.add('active');
        generateBtn.innerText = 'Generate QR Code';
    });
});

qrInput.addEventListener('keyup', () => {
    if (!qrInput.value) {
        wrapper.classList.remove('active');
    }
})