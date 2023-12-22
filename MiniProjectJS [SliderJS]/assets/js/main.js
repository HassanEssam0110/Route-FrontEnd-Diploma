// *================= HTML Elemments =================
const sliderImages = Array.from(document.querySelectorAll('.slider-img'));
const itemImages = Array.from(document.querySelectorAll('.item-image'));
const carouselItems = Array.from(document.querySelectorAll('.carousel-box'));
const slidShowImage = document.querySelector('#showImage');
const lightBoxImage = document.querySelector('#lightBoxImage');
const lightBox = document.querySelector('#lightBox');
const btnPrev = document.querySelector('#prev');
const btnNext = document.querySelector('#next');
const btnClose = document.querySelector('#btnClose');
const carouselPrev = document.querySelector('#carouselPrev');
const carouselNext = document.querySelector('#carouselNext');
const lightBoxPrev = document.querySelector('#lightBoxPrev');
const lightBoxNext = document.querySelector('#lightBoxNext');
// *================= APP Varibles =================
let currentIndex = 0;
let imgList = [];

showImage(sliderImages, currentIndex);
// *================= Helpers =================
function showLightBox(state) {
    state ? lightBox.classList.replace('d-none', 'd-flex') : lightBox.classList.replace('d-flex', 'd-none');
}

function replaceImgList(arr) {
    imgList = arr.slice(0);
}

function handleActiveClass(array, index) {
    if (array) {
        array.forEach(image => image.classList.remove('active'));
        array[index].classList.add('active');
    }
}

function arraysAreEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}



// *================= JS Functions =================
function showImage(imagesList, index) {
    const selectedImage = imagesList[index];
    lightBoxImage.setAttribute('src', selectedImage.src);

    if (arraysAreEqual(imagesList, sliderImages)) {
        slidShowImage.setAttribute('src', selectedImage.src);
    } else if (arraysAreEqual(imagesList, carouselItems)) {
        lightBoxImage.setAttribute('src', selectedImage.lastElementChild.src);
    }

    handleActiveClass(imagesList, index);
}

function getNextImage(arr) {
    currentIndex++;
    if (currentIndex >= arr.length) { currentIndex = currentIndex - arr.length; }
    showImage(arr, currentIndex);
}

function getPrevImage(arr) {
    currentIndex--;
    if (currentIndex < 0) { currentIndex = currentIndex + arr.length; }
    showImage(arr, currentIndex);
}

// *================= Events =================
sliderImages.forEach(img => {
    img.addEventListener('click', (e) => {
        currentIndex = sliderImages.indexOf(e.target);
        replaceImgList(sliderImages);//set sliderImages array to imgList array
        showImage(imgList, currentIndex); // call showImage method
    });
});

itemImages.forEach(img => {
    img.addEventListener('click', (e) => {
        currentIndex = itemImages.indexOf(e.target); // get current index of the image
        replaceImgList(itemImages); //set itemImages array to imgList array
        lightBoxImage.setAttribute('src', imgList[currentIndex].src); // set current index of the image to lightBoxImage
        showLightBox(true); // show lightBox 
    });
});

carouselItems.forEach(item => {
    item.addEventListener('click', (e) => {
        currentIndex = carouselItems.indexOf(carouselItems.find(ite => ite.lastElementChild.src === e.target.src));
        replaceImgList(carouselItems); //set itemImages array to imgList array
        lightBoxImage.setAttribute('src', imgList[currentIndex].lastElementChild.src);
        showLightBox(true); // Show lightBox
    });
});


btnNext.addEventListener('click', () => {
    getNextImage(sliderImages);
});

btnPrev.addEventListener('click', () => {
    getPrevImage(sliderImages);
});


slidShowImage.addEventListener('click', (e) => {
    currentIndex = sliderImages.indexOf(sliderImages.find(ite => ite.src === e.target.src));
    replaceImgList(sliderImages);
    showImage(sliderImages, currentIndex);
    showLightBox(true);
});


carouselPrev.addEventListener('click', () => {
    getPrevImage(carouselItems);
});
carouselNext.addEventListener('click', () => {

    getNextImage(carouselItems);
});
lightBoxPrev.addEventListener('click', (e) => {
    getPrevImage(imgList);
});
lightBoxNext.addEventListener('click', (e) => {
    getNextImage(imgList);
});


// ?===> close lightbox
btnClose.addEventListener('click', () => {
    showLightBox(false);
});

document.addEventListener('click', (e) => {
    if (e.target.id === 'lightBox') {
        showLightBox(false);
    }
});

// ?===> keys event
document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowRight') {
        getNextImage(imgList);
    } else if (e.key === 'ArrowLeft') {
        getPrevImage(imgList);
    } else if (e.key === 'Escape') {
        showLightBox(false);
    }
});

