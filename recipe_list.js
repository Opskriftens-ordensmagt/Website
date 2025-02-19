const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const myMealType = urlParams.get("mealType");

const selectCuisine = document.querySelector("#cuisine");
const selectMealType = document.querySelector("#mealType");

selectCuisine.addEventListener("change", filterCuisine);
// selectMealType.addEventListener("change", filterMealType);

if (myMealType != null) {
  document.querySelector("h2").innerHTML = `<h2>${myMealType}</21>`;
}
let recipeContainer = document.querySelector(".recipe-container");
let allRecipes = [];

let url = `https://dummyjson.com/recipes?limit=0`;
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    allRecipes = data.recipes;
    buildCuisineSelect(data.recipes);
    showList(data.recipes);
  });

function showList(recipes) {
  const markup = recipes
    .map(
      (recipe) => `<div class="recipe">
                                <a href="single_recipe.html?id=${recipe.id}">
                                    <img src="${recipe.image}" alt="${recipe.name}" />
                                </a>
                                <div class="recipe-info">
                                    <p>${recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</p>
                                    <h3>${recipe.name}</h3>
                                    <p>${recipe.mealType}</p>
                                </div>
                            </div>
  `
    )
    .join("");
  recipeContainer.innerHTML = markup;
}

// filter
function buildCuisineSelect(recipes) {
  const cuisines = Array.from(new Set(recipes.map((recipe) => recipe.cuisine)));
  const markup = cuisines.map((cuisine) => ` <option value="${cuisine}">${cuisine}</option>`).join("");
  selectCuisine.innerHTML += markup;
}

function filterCuisine(event) {
  filter(event.target.value, "All");
}

function filter(cuisine, mealType) {
  let filtered = allRecipes;
  if (cuisine != "All") {
    filtered = filtered.filter((recipe) => recipe.cuisine == cuisine);
  }
  showList(filtered);
}
