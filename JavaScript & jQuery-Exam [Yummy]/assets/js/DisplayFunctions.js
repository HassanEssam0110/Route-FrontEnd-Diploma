import { getMealDetails, getListCategories, getCategoryMeals, getListArea, getAreaMeals, getIngredients, getIngredientsMeals, getMealByName, getMealByFLetter } from './MealAPI.js';


// !===>  Function to search and display Meals list by name  
const searchByName = async (mealName) => {
    $('#dataSearch').html(' ');
    $('#search .inner-loading-screen').css({ display: 'flex' });

    // Fetch list of ingredients
    let arr = await getMealByName(mealName);
    arr ? arr : arr = [];
    let cartoona = "";
    for (let i = 0; i < arr.length; i++) {
        // Generate HTML for each Meal
        cartoona += `
            <div class="col-sm-6 col-md-4 col-lg-3">
            <div  class="meal-details meal position-relative overflow-hidden rounded-2 cursor-pointer"
            data-id="${arr[i].idMeal}"> 
            <img loading="lazy" class="w-100" src="${arr[i].strMealThumb}" alt="${arr[i].strMeal}" >
            <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                <h3>${arr[i].strMeal}</h3>
            </div>
        </div>
            </div>`;
    }

    $('#dataSearch').html(cartoona);
    // Render Meals and attach click event
    $('#search .inner-loading-screen').fadeOut(500, () => {
        $('.meal').click(async function () {
            const mealId = $(this).data('id');
            const mealsdetails = await getMealDetails(mealId);
            await displayMealDetails(mealsdetails);
        });
    });
}

// !===>  Function to search and display Meals list by name  
const searchByFLetter = async (fLetter) => {
    $('#dataSearch').html(' ');
    $('#search .inner-loading-screen').css({ display: 'flex' });

    // Fetch list of ingredients
    let arr = await getMealByFLetter(fLetter);
    arr ? arr : arr = [];
    let cartoona = "";
    for (let i = 0; i < arr.length; i++) {
        // Generate HTML for each Meal
        cartoona += `
            <div class="col-sm-6 col-md-4 col-lg-3">
            <div  class="meal-details meal position-relative overflow-hidden rounded-2 cursor-pointer"
            data-id="${arr[i].idMeal}"> 
            <img loading="lazy" class="w-100" src="${arr[i].strMealThumb}" alt="${arr[i].strMeal}" >
            <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                <h3>${arr[i].strMeal}</h3>
            </div>
        </div>
            </div>`;
    }

    $('#dataSearch').html(cartoona);
    // Render Meals and attach click event
    $('#search .inner-loading-screen').fadeOut(500, () => {
        $('.meal').click(async function () {
            const mealId = $(this).data('id');
            const mealsdetails = await getMealDetails(mealId);
            await displayMealDetails(mealsdetails);
        });
    });
}
// !===> Function to display Categories list
const displayCategories = async () => {
    $('#categories .inner-loading-screen').css({ display: 'flex' });
    $('#dataCategories').html('');
    // Fetch list of categories
    const arr = await getListCategories();
    let cartoona = "";
    for (let i = 0; i < arr.length; i++) {
        // Generate HTML for each category
        cartoona += `
            <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="meal h-100 position-relative overflow-hidden rounded-2 cursor-pointer" data-category="${arr[i].strCategory}">
                    <img loading="lazy" class="d-block w-100" src="${arr[i].strCategoryThumb}" alt="${arr[i].strCategory}">
                    <div class="meal-layer position-absolute text-center text-black p-2 overflow-hidden ">
                        <h3>${arr[i].strCategory}</h3>
                        <p>${arr[i].strCategoryDescription.split(" ").slice(0, 20).join(" ")}..</p>
                    </div>
                </div>
            </div>`;
    }

    $('#dataCategories').html(cartoona);
    // Render categories and attach click event
    $('#categories .inner-loading-screen').fadeOut(500, () => {
        $('.meal').click(async function () {
            const catName = $(this).data('category');
            const mealsList = await getCategoryMeals(catName);
            await displayMeals(mealsList);
        });
    });
}

// !===>  Function to display Areas list
const displayArea = async () => {
    $('#area .inner-loading-screen').css({ display: 'flex' });
    $('#dataArea').html('');
    // Fetch list of areas
    const arr = await getListArea();

    let cartoona = "";
    for (let i = 0; i < arr.length; i++) {
        // Generate HTML for each area
        cartoona += `
        <div class="col-sm-6 col-md-4 col-lg-3">
        <div  class="area rounded-2 text-center cursor-pointer" data-area='${arr[i].strArea}'>
        <i class="icon-house-laptop icon-area"></i>
                <h3>${arr[i].strArea}</h3>
        </div>
        </div>`}

    $('#dataArea').html(cartoona);
    // Render areas and attach click event
    $('#area .inner-loading-screen').fadeOut(500, () => {
        $('.area').click(async function () {
            const areaName = $(this).data('area');
            const mealsList = await getAreaMeals(areaName);
            await displayMeals(mealsList);
        });
    });
}

// !===>  Function to display Ingredients list
const displayIngredients = async () => {
    $('#ingredients .inner-loading-screen').css({ display: 'flex' });
    $('#dataIngredients').html(' ');
    // Fetch list of ingredients
    const arr = await getIngredients();
    let cartoona = "";
    for (let i = 0; i < arr.length; i++) {
        // Generate HTML for each ingredient
        cartoona += `
        <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="ingredient h-100 p-1 rounded-2 text-center cursor-pointer" data-ingredients='${arr[i].strIngredient}'>
        <i class="icon-drumstick-bite icon-ingredients"></i>
        <h3 class="fs-3 mt-2">${arr[i].strIngredient}</h3>
        <p class="mb-auto">${arr[i].strDescription.split(" ").slice(0, 20).join(" ")}..</p>
        </div>
        </div>`}

    $('#dataIngredients').html(cartoona);
    // Render ingredients and attach click event
    $('#ingredients .inner-loading-screen').fadeOut(500, () => {
        $('.ingredient').click(async function () {
            const ingredientName = $(this).data('ingredients');
            const mealsList = await getIngredientsMeals(ingredientName);
            await displayMeals(mealsList);
        });
    });
}

// !===> Function to display Meals list
const displayMeals = async (arr) => {
    $('#meals .inner-loading-screen').css({ display: 'flex' });
    $('#dataMeals').html('');
    // hide all sections and show section meals.
    $('section').fadeOut(10, () => {
        $('#meals').fadeIn(100);
    });
    $('html, body').animate({ scrollTop: 0 });

    let cartoona = "";
    for (let i = 0; i < arr.length; i++) {
        // Generate HTML for each Meal
        cartoona += `
            <div class="col-sm-6 col-md-4 col-lg-3">
            <div  class="meal-details meal position-relative overflow-hidden rounded-2 cursor-pointer"
            data-id="${arr[i].idMeal}"> 
            <img loading="lazy" class="w-100" src="${arr[i].strMealThumb}" alt="${arr[i].strMeal}" >
            <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                <h3>${arr[i].strMeal}</h3>
            </div>
        </div>
            </div>`;
    }

    $('#dataMeals').html(cartoona);
    // Render Meals and attach click event
    $('#meals .inner-loading-screen').fadeOut(500, () => {
        $('.meal').click(async function () {
            const mealId = $(this).data('id');
            const mealsdetails = await getMealDetails(mealId);
            await displayMealDetails(mealsdetails);
        });
    });
}

// !===> Function to display Meals details
const displayMealDetails = async (meal) => {
    $('#mealsDetails .inner-loading-screen').css({ display: 'flex' });
    $('#dataMealsDetails').html('');
    // hide all sections and show section meals.
    $('section').fadeOut(10, () => {
        $('#mealsDetails').fadeIn(100);
    });
    $('html, body').animate({ scrollTop: 0 });

    let cartoona, tagsStr = '';
    let ingredients = ``;

    // handle Recipes
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients += `<li class="alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
        }
    }

    // handle Tags
    let tags = meal.strTags?.split(",");
    if (!tags) { tags = []; };
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
    }

    // Generate HTML for Meal
    cartoona = `
    <div class="col-md-4">
                <img loading="lazy" class="d-block w-100 rounded-3" src="${meal.strMealThumb}" alt=${meal.strMeal}>
                <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                <h3>Recipes :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${ingredients}
                </ul>
                <h3>Tags :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${tagsStr}
                </ul>
                <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
            </div>`

    // Render Meal Details  
    $('#dataMealsDetails').html(cartoona);
    $('#mealsDetails .inner-loading-screen').fadeOut(500);
}

// Exported functions
export { displayMeals, displayCategories, displayArea, displayIngredients, searchByName, searchByFLetter };