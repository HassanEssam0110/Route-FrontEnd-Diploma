// *================= HTML Elemments =================
const quoteBtn = document.getElementById('quote_btn');
const qutePara = document.getElementById('quote');
const quteAuthor = document.getElementById('author');
const quteAvater = document.getElementById('avater');
const quoteSection = document.getElementById('quoteSection');
const swiperWrapper = document.getElementById('swiperWrapper');

// *================= JS Varibles =================
let baseUrl = 'assets/Data/data.json';
let quotesList, currentQute;
let swiper = new Swiper(".mySwiper", {
    // slidesPerView: 1,
    // spaceBetween: 30,
    // centeredSlides: true,
    rewind: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// *================= Helpers =================
// ?================= Generate Random Num Qute =================
const generateRandomNum = (length) => {
    return Math.trunc(Math.random() * length);
};
// ?================= Request GET Qutes =================
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.log('Error fetching the JSON file:', err);
    }
}

// *================= JS Functions =================
// ?================= Main Function Update Quote content =================
function updateQuote(Quotes) {
    let randomNum = generateRandomNum(Quotes.length);
    let quoteObj = Quotes[randomNum];

    if (quoteObj.quote !== currentQute) {
        qutePara.textContent = `"${quoteObj.quote}"`;
        quteAuthor.textContent = `-- ${quoteObj.author}`;
        quteAvater.setAttribute('src', quoteObj.avater);
        quoteSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 90%), rgba(0, 0, 0, 95%)),url(${quoteObj.avater})`;
        currentQute = quoteObj.quote;
    } else {
        updateQuote(Quotes);
    }
}

// ?================= Handle Slider In Modal =================
function handleSlider(quotes, slider) {
    quotes.forEach(item => {
        slider.innerHTML += `<div class="swiper-slide">
        <div
        class="inner d-flex flex-column justify-content-around align-items-center py-4 px-2">
        <figure class="mb-0">
            <img id="avater" class="shadow" src="${item.avater}" alt="${item.author} personal image">
        </figure>
        <div class="text-center mt-3 quote-content ">
            <p id="quote" class="quote-text mb-0 fs-5 fw-semibold text-dark ">"${item.quote}"</p>
            <p id="author" class="quote-author mb-0 fst-italic text-warning ">${item.author}</p>
        </div>
    </div>
        </div> `;
    });
}

// *================= Events =================
window.addEventListener('load', async () => {
    quotesList = await fetchData(baseUrl);
    handleSlider(quotesList, swiperWrapper);
})

quoteBtn.addEventListener('click', () => {
    updateQuote(quotesList);
});



