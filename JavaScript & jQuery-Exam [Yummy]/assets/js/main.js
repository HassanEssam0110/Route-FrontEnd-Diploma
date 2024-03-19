import { displayCategories, displayArea, displayIngredients, displayMeals, searchByName, searchByFLetter } from './DisplayFunctions.js'
import { getMealByName } from './MealAPI.js'
import { handleInputsValidation } from "./inputValidation.js";

// ^=============== APP VARIABLES ===============
let sideToggle = false;


$(document).ready(async () => {
    closeSideMenu(0);
    removeLoderScreen(); // remove loader screen
    resizeSectionWidth(); // handle section width
    // await displayMeals(await getMealByName(''));
});

$(window).ready(async () => {
    let meals = await getMealByName('')
    await displayMeals(meals);
});

$(window).on("resize", function () {
    resizeSectionWidth();
});

$('#menuToggle').click(() => {
    sideToggle ? openSideMenu() : closeSideMenu();
});

$("a.nav-link[href^='#']").click(async (e) => {
    e.preventDefault();
    closeSideMenu();
    let targetSection = $(e.target).attr("href");
    $('section').fadeOut(0);
    $(`section${targetSection}`).fadeIn(0, () => {
        $('html, body').animate({ scrollTop: 0 }, 10);
    });

    switch (targetSection) {
        case '#search':
            $('#search .inner-loading-screen').css({ display: 'none' });
            $('#searchByNameInput').val('');
            $('#searchByFLetterInput').val('');
            $('#dataSearch').html('');
            break;
        case '#categories':
            await displayCategories();
            break;
        case '#area':
            await displayArea();
            break;
        case '#ingredients':
            await displayIngredients();
            break;
        case '#contactUs':
            handleInputsValidation();
            break;
    };
});

$('#searchByNameInput').on('keyup', async function (e) {
    await searchByName($(this).val());
});

$('#searchByFLetterInput').on('keyup', async function () {
    if ($(this).val().length > 1) {
        $(this).val($(this).val().substring(0, 1));
    }
    await searchByFLetter($(this).val() || 'a');
});

// *=============== FUNCTIONS ===============
function removeLoderScreen() {
    $('.loading-screen').fadeOut(500);
    $("body").css("overflow", "visible");
}

function openSideMenu() {
    $('.side-menu').animate({ left: 0 }, 500);
    $('#menuToggle').removeClass('icon-align-justify')
    $('#menuToggle').addClass('icon-close');
    $('.nav .nav-item').each(function (index) {
        $(this).animate({ opacity: 1, top: 0 }, (index + 5) * 100)
    });
    sideToggle = !sideToggle;
}

function closeSideMenu(duration = 500) {
    let navTabWidth = $('.nav-tab').outerWidth();
    $('.side-menu').animate({ left: -navTabWidth }, duration);
    $('#menuToggle').removeClass('icon-close');
    $('#menuToggle').addClass('icon-align-justify');
    $('.nav .nav-item').each(function () {
        $(this).animate({ opacity: 0, top: 300 }, 500)
    });
    sideToggle = !sideToggle;
}

function resizeSectionWidth() {
    let navHeaderWidth = $('.nav-header').outerWidth();
    let newWidth = $('body').width() - navHeaderWidth;
    $('section').css({ 'max-width': newWidth, width: newWidth });
}