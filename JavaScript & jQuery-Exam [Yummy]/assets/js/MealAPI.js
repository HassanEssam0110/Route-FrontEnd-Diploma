// &==> Base URL for the API requests
let baseURL = 'https://www.themealdb.com/api/json/v1/1';

// ^==========> Get Meal <==========
// !==> Function to get details of a meal by its ID
const getMealDetails = async (mealID) => {
    try {
        let response = await fetch(`${baseURL}/lookup.php?i=${mealID}`); // Fetch meal details by ID
        let data = await response.json();
        return data.meals[0];
    } catch (err) {
        console.log("error getMealDetails: ==>", err);
    }
}

// ^========> Search <========
// !==> Function to search for meals list by name
const getMealByName = async (mealName) => {
    try {
        let response = await fetch(`${baseURL}/search.php?s=${mealName}`);// Search for meals by name
        let data = await response.json();
        return data.meals;
    } catch (err) {
        console.log("error getListCategories: ==>", err);
    }
}

// !==> Function to search for meals list by first letter
const getMealByFLetter = async (fLetter) => {
    try {
        let response = await fetch(`${baseURL}/search.php?f=${fLetter}`);  // Search for meals by first letter
        let data = await response.json();
        console.log(data.meals);
        return data.meals;
    } catch (err) {
        console.log("error getMealByFLetter: ==>", err);
    }
}

// ^==========> Categories <==========
// !==> Function to get list of categories
const getListCategories = async () => {
    try {
        let response = await fetch(`${baseURL}/categories.php`);  // Fetch list of categories
        let data = await response.json();
        return data.categories;
    } catch (err) {
        console.log("error getListCategories: ==>", err);
    }
}
// !==> Function to get meals by category
const getCategoryMeals = async (category) => {
    try {
        let response = await fetch(`${baseURL}/filter.php?c=${category}`);  // Fetch meals by category
        let data = await response.json();
        return data.meals.slice(0, 20);
    } catch (err) {
        console.log("error getCategoryMeals: ==>", err);
    }
}

// ^==========> Areas <==========
// !==> Function to get list of Areas
const getListArea = async () => {
    try {
        let response = await fetch(`${baseURL}/list.php?a=list`); // Fetch list of areas
        let data = await response.json();
        return data.meals;
    } catch (err) {
        console.log("error getListArea: ==>", err);
    }
}
// !==> Function to get meals by area
const getAreaMeals = async (area) => {
    try {
        let response = await fetch(`${baseURL}/filter.php?a=${area}`); // Fetch meals by area
        let data = await response.json();
        return data.meals.slice(0, 20);
    } catch (err) {
        console.log("error getAreMeals: ==>", err);
    }
}

// ^==========> Ingredients <==========
//!==> Function to get list of Ingredients
const getIngredients = async () => {
    try {
        let response = await fetch(`${baseURL}/list.php?i=list`); // Fetch list of ingredients
        let data = await response.json();
        return data.meals.slice(0, 20);
    } catch (err) {
        console.log("error getIngredients: ==>", err);
    }
}
// !==> Function to get meals by Ingredients
const getIngredientsMeals = async (ingredients) => {
    try {
        let response = await fetch(`${baseURL}/filter.php?i=${ingredients}`);  // Fetch meals by ingredients
        let data = await response.json();
        return data.meals.slice(0, 20);
    } catch (err) {
        console.log("error getIngredientsMeals: ==>", err);
    }
}

export { getMealDetails, getMealByName, getMealByFLetter, getListCategories, getCategoryMeals, getListArea, getAreaMeals, getIngredients, getIngredientsMeals };

/*
API Documentation 
 API Methods using the developer test key '1' as the API key

Search meal by name
www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

List all meals by first letter
www.themealdb.com/api/json/v1/1/search.php?f=a

Lookup full meal details by id
www.themealdb.com/api/json/v1/1/lookup.php?i=52772

Lookup a single random meal
www.themealdb.com/api/json/v1/1/random.php

Lookup a selection of 10 random meals (only available to Paypal supporters)
www.themealdb.com/api/json/v1/1/randomselection.php

List all meal categories
www.themealdb.com/api/json/v1/1/categories.php

Latest Meals (only available to Paypal supporters)
www.themealdb.com/api/json/v1/1/latest.php

List all Categories, Area, Ingredients
www.themealdb.com/api/json/v1/1/list.php?c=list
www.themealdb.com/api/json/v1/1/list.php?a=list
www.themealdb.com/api/json/v1/1/list.php?i=list

Filter by main ingredient
www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

Filter by multi-ingredient (only available to Paypal supporters)
www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast,garlic,salt
Filter by Category
www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

Filter by Area
www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

Images
Meal Thumbnail Images
Add /preview to the end of the meal image URL
/images/media/meals/llcbn01574260722.jpg/preview

Ingredient Thumbnail Images
www.themealdb.com/images/ingredients/Lime.png
www.themealdb.com/images/ingredients/Lime-Small.png
*/