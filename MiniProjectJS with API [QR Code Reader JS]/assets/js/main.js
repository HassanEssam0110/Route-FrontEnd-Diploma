const wrapper = document.querySelector('.wrapper');
const form = wrapper.querySelector('form');
const fileInput = form.querySelector('input');
const infoText = form.querySelector('p');
const closeBtn = wrapper.querySelector('.close');
const copyBtn = wrapper.querySelector('.copy');


const sendQrRequest = async (formData, file) => {
    infoText.innerHTML = 'Scanning QR Code...';

    try {
        //send post request to qr server api with passing form data as body and getting response from it
        let response = await fetch('http://api.qrserver.com/v1/read-qr-code/', {
            method: 'POST', body: formData
        });

        let result = await response.json();
        let data = result[0].symbol[0].data;

        infoText.innerText = data ? "Upload QR code to scan" : "Couldn't Scan QR Code";
        if (!data) return;

        wrapper.querySelector('textarea').innerText = data;
        form.querySelector('img').src = URL.createObjectURL(file); // set url to image src 
        wrapper.classList.add('active');

    } catch (error) {
        console.log('There was an error', error);
        infoText.innerText = "Couldn't Scan QR Code";
    }
}

fileInput.addEventListener('change', (e) => {
    let file = e.target.files[0]; // get img file QRCode
    if (!file) return;
    let formData = new FormData(); // create a new FormData object
    formData.append('file', file);
    sendQrRequest(formData, file);
});
form.addEventListener('click', () => fileInput.click());

copyBtn.addEventListener('click', () => {
    let textCopy = wrapper.querySelector('textarea').textContent;
    navigator.clipboard.writeText(textCopy);
});
closeBtn.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
