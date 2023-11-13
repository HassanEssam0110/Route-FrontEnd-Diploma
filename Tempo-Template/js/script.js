const navlinks = document.querySelectorAll('.nav-link');
const header = document.getElementById('header');
const btnHeader = document.getElementById('btn-header');
const portfolioFilters = document.querySelectorAll('.portfolio-filter');
const btnTop = document.getElementById('btn-up');
const questions = document.querySelectorAll('.question');

const removeActive = (arr) => {
    arr.forEach(item => item.classList.remove('active'))
}

window.onscroll = () => {
    if (window.scrollY > 60) {
        header.classList.add('scrolling');
        btnTop.style.display = 'block';
    } else {
        header.classList.remove('scrolling')
        btnTop.style.display = 'none';
    }
}

// ?==> Scroll Top button
btnTop.addEventListener('click', () => {
    // Scroll the window to the top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})


// ?===> start  header 
navlinks.forEach((link) => {
    link.addEventListener('click', () => {
        removeActive(navlinks);
        link.classList.add('active');
        document.getElementById('navbar').classList.remove('active');
    })
})

btnHeader.addEventListener('click', () => {
    document.getElementById('navbar').classList.toggle('active');
})



// ?===> start  portfolio filter
portfolioFilters.forEach(item => {
    item.addEventListener('click', () => {
        removeActive(portfolioFilters);
        item.classList.add('active');
        filterCards(item.dataset.filter);
    })
})

const filterCards = (category) => {
    const cards = document.querySelectorAll('.portf-card');

    if (category === '*') {
        cards.forEach(card => {
            card.style.display = "block";
        });
    } else {
        cards.forEach(card => {
            if (card.classList.contains(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }
}



// ?===> FAQ 
questions.forEach(question => {
    question.addEventListener('click', () => {
        if (!question.parentNode.classList.contains('active')) {
            // loop all questions to remove active from other questions
            questions.forEach(q => {
                q.parentNode.classList.remove('active');
            });

            question.parentNode.classList.add('active');
        } else {
            question.parentNode.classList.remove('active');
        }
    })
})
