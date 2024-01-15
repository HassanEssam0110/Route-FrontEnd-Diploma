// ?=============== HTML ELEMENT ===============
const assContainer = document.querySelector('#assContainer');
const miniProjectsContainer = document.querySelector('#miniProjectsContainer');
const miniProjectsAPIContainer = document.querySelector('#miniProjectsAPIContainer');
const topicsContainer = document.querySelector('#topicsContainer');
// ^=============== APP VARIABLES ===============
let codeURL = 'https://github.com/HassanEssam0110/Route-FrontEnd-Diploma';
let assignmentsList = [
    { title: 'Assignment-01 [First HTML]', demo: './Assignment-01 [First HTML]/index.html', img: './Assignment-01 [First HTML]/output.png' },
    { title: 'Assignment-02 [User Form]', demo: '././Assignment-02 [User Form]/index.html', img: './Assignment-02 [User Form]/output.png' },
    { title: 'Assignment-03 [Bakery Template]', demo: './Assignment-03 [Bakery Template]/index.html', img: './Assignment-03 [Bakery Template]/output.png' },
    { title: 'Assignment-04 [Fokir Template]', demo: './Assignment-04 [Fokir Template]/index.html', img: './Assignment-04 [Fokir Template]/output.png' },
    { title: 'Assignment-05 [Mealify Template]', demo: './Assignment-05 [Mealify Template]/index.html', img: './Assignment-05 [Mealify Template]/output.png' },
    { title: 'Assignment-06 [DevFolio Template]', demo: './Assignment-06 [DevFolio Template]/index.html', img: './Assignment-06 [DevFolio Template]/output.png' },
    { title: 'Assignment-07 [First JS]', demo: './Assignment-07 [First JS]/index.html', img: './Assignment-07 [First JS]/js-1.png' },
    { title: 'Assignment-08 [Random Quote JS & JSON]', demo: './Assignment-08 [Random Quote JS & JSON]/index.html', img: './Assignment-08 [Random Quote JS & JSON]/output.png' },
    { title: 'Assignment-09 [Bookmarker JS & LocalStorage]', demo: './Assignment-09 [Bookmarker JS & LocalStorage]/index.html', img: './Assignment-09 [Bookmarker JS & LocalStorage]/output.png' },
    { title: 'Assignment-10 [Login JS & LocalStorage]', demo: './Assignment-10 [Login JS & LocalStorage]/index.html', img: './Assignment-10 [Login JS & LocalStorage]/output.png' },
    { title: 'Assignment-11 [Weather App JS]', demo: './Assignment-11 [Weather App JS]/index.html', img: './Assignment-11 [Weather App JS]/output.png' },
];
let otherTopicsList = [
    { title: 'Bootstrap-Exam [Daniels Template]', demo: './Bootstrap-Exam [Daniels Template]/index.html', img: './Bootstrap-Exam [Daniels Template]/output.png' },
    { title: '[Tempo-Template]', demo: './[Tempo-Template]/index.html', img: './[Tempo-Template]/output.png' },
    { title: 'CSS Tricks [Create An Equal Height Bootstrap-5 Cols]', demo: './CSS Tricks [Create An Equal Height Bootstrap-5 Cols]/index.html', img: './CSS Tricks [Create An Equal Height Bootstrap-5 Cols]/output.png' },
    { title: 'CSS Tricks [Gradient tricks]', demo: './CSS Tricks [Gradient tricks]/index.html', img: './CSS Tricks [Gradient tricks]/output.png' },
];
let miniProjectList = [
    { title: 'MiniProjectJS [CaptchaGenJS]', demo: './MiniProjectJS [CaptchaGenJS]/index.html', img: './MiniProjectJS [CaptchaGenJS]/output.png' },
    { title: 'MiniProjectJS [RGB GameJS]', demo: './MiniProjectJS [RGB GameJS]/index.html', img: './MiniProjectJS [RGB GameJS]/output.png' },
    { title: 'MiniProjectJS [SliderJS]', demo: './MiniProjectJS [SliderJS]/index.html', img: './MiniProjectJS [SliderJS]/output.png' },
];
let miniProjectAPIList = [
    { title: '01- Check Internet Connection JS', demo: '../MiniProjectJS with API [Check Internet Connection JS]/index.html', img: '../MiniProjectJS with API [Check Internet Connection JS]/output.png' },
    { title: '02- QR Code Generator JS', demo: '../MiniProjectJS with API [QR Code Generator JS]/index.html', img: '../MiniProjectJS with API [QR Code Generator JS]/output.png' },
    { title: '03- QR Code Reader JS', demo: '../MiniProjectJS with API [QR Code Reader JS]/index.html', img: '../MiniProjectJS with API [QR Code Reader JS]/output.png' },
]

// ^=============== JS FUNCTIONS ===============
function display(conteniarEl,list) {
    let contant = '';
    list.forEach(element => {
        contant += `
        <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="inner position-relative ">
            <img class="img-fluid rounded  " src="${element.img}" alt="project img">
            <div
                class="content rounded  p-2 d-flex  flex-column justify-content-around align-items-center  position-absolute w-100 h-100 top-0 start-0">
                <h5 class="fs-5 text-center">${element.title}</h5>
                <div class="w-100 d-flex justify-content-between align-items-center ">
                    <a class="btn btn-custom btn-sm  mx-auto mt-2" target="_blank" href="${element.demo}"><i
                            class="fa-solid fa-link"></i>
                        demo
                    </a>
                    <a class="btn btn-custom btn-sm  mx-auto mt-2" target="_blank" href="${codeURL}"><i
                            class="fa-solid fa-laptop-code"></i>
                        code
                    </a>
                </div>
            </div>
        </div>
    </div>`
    });
    conteniarEl.innerHTML = contant;
}

display(assContainer, assignmentsList);
display(miniProjectsAPIContainer, miniProjectAPIList);
display(miniProjectsContainer, miniProjectList);
display(topicsContainer, otherTopicsList);