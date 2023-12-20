// ^=============== HTML ELEMENT ===============
const body = document.querySelector('body');
const btnMode = document.querySelector('#btnMode');
const siteName = document.querySelector('#bookmarkName');
const siteURL = document.querySelector('#bookmarkURL');
const submitBtn = document.querySelector('#submitBtn');
const tableContent = document.querySelector('#tableContent');
const searchInput = document.querySelector('#searchInput');

// ^=============== APP VARIABLES ===============
let darkMode;
let bookmarks = [];

// ?====> regex patterns
const siteNameRegex = /^([a-z]{3})[a-z]*$/i;
const siteURLRegex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;

// ?====> alert messages
const messagesAlert = {
    msgErrorObj: {
        icon: "error",
        title: "Oops...",
        text: "The Site Name or URL is not valid.",
        footer: `<p class="text-start fw-semibold">
        <i class="icon-angle-double-right text-danger"></i> The Site Name must contain at least 3 characters. 
        <br>
        <i class="icon-angle-double-right text-danger"></i> The Site URL must be valid.</p>`
    },
    msgSussesObj: {
        title: "Great work!",
        text: "You've successfully added a bookmark.",
        icon: "success",
        timer: 1000
    },
    msgConfirmObj: {
        title: "Are you sure?",
        text: "You are about to delete this website. This action cannot be undone.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    },
    msgDeleteObj: {
        title: "Deleted!",
        text: "Your site has been deleted.",
        icon: "success",
        timer: 1000
    }
}


// ^=============== JS FUNCTIONS HELPERS ===============
function toggleClass(el, className, condition) {
    condition ? el.classList.add(className) : el.classList.remove(className);
}

function setLocalstorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}

function getLocalstorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function validationInput(regex, element) {
    const valid = regex.test(element.value);
    toggleClass(element, "is-valid", valid);
    toggleClass(element, "is-invalid", !valid);
    return valid;
}


// ^=============== JS FUNCTIONS ===============
// *===> check localstorage values on page load
(function () {
    console.log("This function is called immediately");
    let darkmodeFounded = getLocalstorage('Mode');
    let bookmarksListFounded = getLocalstorage('bookmarksList');

    //  check dark mode in localStorage
    if (darkmodeFounded) {
        darkMode = darkmodeFounded;
        toggleClass(body, 'dark', darkMode);
        darkMode ? btnMode.innerHTML = `<i class="icon-sun"></i>` : btnMode.innerHTML = `<i class="icon-moon-o"></i>`
    } else {
        darkMode = false;
        setLocalstorage('Mode', darkMode);
    }

    // check Bookmarks list in localStorage
    if (bookmarksListFounded && bookmarksListFounded.length > 0) {
        bookmarks = bookmarksListFounded;
        Display(bookmarks);
    } else {
        document.querySelector('#tableSection').style.display = 'none';
    }
})();

// *=====> Clear Input Function
function clearInput() {
    siteName.value = "";
    siteURL.value = "";
    toggleClass(siteName, "is-valid", false);
    toggleClass(siteURL, "is-valid", false);
}

// *===> Display bookmarks in Table
function Display(bookmarksArray) {
    document.querySelector('#tableSection').style.display = 'block';
    tableContent.innerHTML = '';
    let contentTable = '';
    for (let i = 0; i < bookmarksArray.length; i++) {
        contentTable += `<tr>
      <td scope="row" class="fw-semibold">${i + 1}</td>
      <td class="fw-semibold text-capitalize">${bookmarksArray[i].siteName}</td>              
      <td><button class="btn btn-success btn-sm"  onclick="visitBookmark('${bookmarksArray[i].siteURL}')" data-index="${bookmarksArray[i].siteURL}"><i class="icon-eye1 pe-1 icon-btn"></i>Visit</button></td>
      <td><button class="btn btn-danger btn-sm" onclick="deleteBookmark(${bookmarksArray[i].index})" data-index="${bookmarksArray[i].index}"><i class="icon-bin pe-1 icon-btn"></i>Delete</button></td>
    </tr>`;
    };
    tableContent.innerHTML = contentTable;
}

// *===> Add bookmark object to bookmarks.
function addToBookmarks(bookmarkObj) {
    bookmarks.push(bookmarkObj);
    setLocalstorage('bookmarksList', bookmarks);
    Display(bookmarks);
}

// *===> Delete bookmark from bookmarks.
function deleteBookmark(index) {
    Swal.fire(messagesAlert.msgConfirmObj)
        .then((result) => {
            if (result.isConfirmed) {
                siteIndex = bookmarks.indexOf(bookmarks.find(site => site.index === index)) // get index in array 
                bookmarks.splice(siteIndex, 1); //remove frome array
                setLocalstorage('bookmarksList', bookmarks); //update array in localStorage
                Display(bookmarks);
                if (bookmarks.length < 1) { document.querySelector('#tableSection').style.display = 'none'; }
                Swal.fire(messagesAlert.msgDeleteObj);
            }
        });
}

// *===> visit bookmark from bookmarks.
function visitBookmark(url) {
    window.open(url, '_blank');
}

// *===> search for bookmark
function searchBookmark(val) {

    keyword = val.toLowerCase();
    let result = bookmarks.filter(bookmark => {
        return bookmark.siteName.toLowerCase().includes(keyword);
    })
    console.log(result);
    console.log(keyword);
    Display(result);
}

// ^=============== EVENTS ===============
btnMode.addEventListener('click', () => {
    darkMode = !darkMode;
    toggleClass(body, 'dark', darkMode);
    setLocalstorage('Mode', darkMode);
    darkMode ? btnMode.innerHTML = `<i class="icon-sun"></i>` : btnMode.innerHTML = `<i class="icon-moon-o"></i>`
});

submitBtn.addEventListener('click', () => {
    let nameValid = validationInput(siteNameRegex, siteName);
    let urlValid = validationInput(siteURLRegex, siteURL);
    if (nameValid && urlValid) {
        let bookmark = { index: bookmarks.length, siteName: siteName.value, siteURL: siteURL.value };
        addToBookmarks(bookmark);
        clearInput();
        Swal.fire(messagesAlert.msgSussesObj);
    } else {
        Swal.fire(messagesAlert.msgErrorObj);
    }
});

siteName.addEventListener("input", () => {
    validationInput(siteNameRegex, siteName);
});

siteURL.addEventListener("input", () => {
    validationInput(siteURLRegex, siteURL);
});


searchInput.addEventListener('input', () => {
    searchBookmark(searchInput.value);
})