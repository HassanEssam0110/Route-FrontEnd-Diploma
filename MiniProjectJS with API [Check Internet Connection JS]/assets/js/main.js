const popup = document.querySelector('.popup');
const popupIcon = document.querySelector('.popup-icon i');
const popupTitle = document.querySelector('.popup-title');
const popupDesc = document.querySelector('.popup-desc');
const reconnectBtn = document.querySelector('.reconnect');

let isOnline = true, intervalId, timer = 10;

async function checkConnection() {
    try {
        // Try to fetch random data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        // If the status code is between 200 and 300 , the network connection is considered online.
        isOnline = response.status >= 200 && response.status < 300;
    } catch (err) {
        // If there is an error , the network connection is considered offline.
        isOnline = false;
    }

    timer = 10;
    clearInterval(intervalId);
    handlePopup(isOnline);
}


function handlePopup(statusVal) {
    // If the status is true (online)
    if (statusVal) {
        popupIcon.className = 'icon-wifi';
        popupTitle.innerText = 'Restored Connection';
        popupDesc.innerHTML = 'Your device is now successfully connected to the internet.';
        popup.classList.add('online');
        return setTimeout(() => popup.classList.remove('show'), 2000);
    }

    // If the status is true (offline)
    popupIcon.className = 'icon-wifi-off';
    popupTitle.innerText = 'Lost Connection';
    popupDesc.innerHTML = `Your network is unavailable. We will attempt to reconnect you in <span>10</span> seconds.`;
    popup.className = 'popup show';
    // set interval to decrease the timer by 1 every second.
    intervalId = setInterval(() => {
        timer--;
        // If the timer 0 ,check Conncetion again
        if (timer === 0) {
            checkConnection();
        }
        popup.querySelector('.popup-desc span').innerText = timer;
    }, 1000);

}
// Check the connection status every 3 seconds
setInterval(() => isOnline && checkConnection(), 3000);

reconnectBtn.addEventListener('click', () => checkConnection());