// ^=============== APP VARIABLES ===============
let openNav = false;
const maxLength = 100;

$('.nav-link').fadeOut();
// *=============== FUNCTIONS ===============
const closeNavbar = () => {
    $('.nav-link').fadeOut(300, () => {
        $('#nav').hide(400);
        $('#btnMenu').fadeIn(400);
    });
    openNav = !openNav;
};

const openNavbar = () => {
    $('#btnMenu').fadeOut(200);
    $('#nav').show(400, () => {
        $('.nav-link').fadeIn(300);
    });
    openNav = !openNav;
};

const updateCountdown = (dateCountTo) => {
    let countDownDate = new Date(dateCountTo).getTime();
    let nowDate = new Date().getTime();

    // Calculating the time difference between two times
    let timeDifference = countDownDate - nowDate;

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    $('.countDown .days').text(days);
    $('.countDown .hours').text(hours);
    $('.countDown .minutes').text(minutes);
    $('.countDown .seconds').text(seconds);

    return timeDifference;
}

const countDownToTime = (dateCountTo) => {
    // Set interval for updating countdown every second
    let counterInterval = setInterval(() => {
        let timeDifference = updateCountdown(dateCountTo);
        if (timeDifference <= 0) {
            clearInterval(counterInterval);
            $('.countDown .days').text(0);
            $('.countDown .hours').text(0);
            $('.countDown .minutes').text(0);
            $('.countDown .seconds').text(0);
        }
    }, 1000);
}




// ?======= Navbar *=======
$('#btnMenu').click((e) => {
    e.stopPropagation();
    openNav ? closeNavbar() : openNavbar();
});

$('#btnCloseMenu').click((e) => {
    e.stopPropagation();
    closeNavbar();
});

$(document).on("click", function (e) {
    // Check if the clicked element is not part of the .navbar
    if (!$(e.target).closest(".navbar").length && openNav === true) {
        closeNavbar();
    }
});


// ?===> scroll menu 
$("nav a[href^='#']").click((e) => {
    let targetSection = $(e.target).attr("href");
    let targetOffset = $(targetSection).offset().top;
    $("html, body").animate({ scrollTop: targetOffset }, 200, () => {
        $('.nav-link').siblings().removeClass('active');
        $(e.target).addClass('active');
    });
    closeNavbar();
});


// ?===> Accordion 
$('#sliderDown .accordion-head').click((e) => {
    $('.accordion-content').not($(e.target).next()).slideUp(400);
    $(e.target).next().slideToggle(400);
});

// ?===> CountDown 
$(window).ready(() => {
    countDownToTime("may 16 2024 23:59:59");
    // countDownToTime("jan 20 2024 22:28:59");
});


// ?===> contact form 
$('#formMsg').keyup((e) => {
    let length = $(e.target).val().length;
    let amontLeft = maxLength - length;
    amontLeft <= 0 ? $("#chars").text("your available character finished") : $('#chars').text(amontLeft)
});


$('#btnContact').click((e) => {
    e.stopPropagation();
    e.preventDefault();
    let name = $('#inputName').val();
    let email = $('#inputEmail').val();
    let msg = $('#formMsg').val();

    if (name.length === 0) {
        $('#inputName').addClass('is-invalid')
    }
    if (email.length === 0) {
        $('#inputEmail').addClass('is-invalid')
    }
    if (msg.length === 0) {
        $('#formMsg').addClass('is-invalid')
    }
})
