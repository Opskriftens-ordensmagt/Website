const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let myMealType = urlParams.get("mealType");
if (myMealType == null) {
  myMealType = "All";
}

const selectCuisine = document.querySelector("#cuisine");
const selectMealType = document.querySelector("#mealType");

selectCuisine.addEventListener("change", filterCuisine);
selectMealType.addEventListener("change", filterMealType);

let recipeContainer = document.querySelector(".recipe-container");
let allRecipes = [];

let url = `https://dummyjson.com/recipes?limit=0`;
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    allRecipes = data.recipes;
    buildCuisineSelect(data.recipes);
    buildMealTypeSelect(data.recipes);
    filter("All");
  });

function showList(recipes) {
  document.querySelector("h2").innerHTML = `<h2>${myMealType}</21>`;

  const markup = recipes
    .map(
      (recipe) => `<div class="recipe">
                                <a href="single_recipe.html?id=${recipe.id}">
                                    <img src="${recipe.image}" alt="${recipe.name}" />
                                </a>
                                <div class="recipe-info">
                                    <p>${recipe.prepTimeMinutes + recipe.cookTimeMinutes} min &#9202;</p>
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
// cuisine
function buildCuisineSelect(recipes) {
  const cuisines = Array.from(new Set(recipes.map((recipe) => recipe.cuisine)));
  const markup = cuisines.map((cuisine) => ` <option value="${cuisine}">${cuisine}</option>`).join("");
  selectCuisine.innerHTML = `<option value="All">All cuisine</option> ${markup}`;
}

function filterCuisine(event) {
  filter(event.target.value, "All");
}

function filter(cuisine) {
  let filtered = allRecipes;
  if (myMealType != "All") {
    filtered = filtered.filter((recipe) => recipe.mealType.includes(myMealType));
  }
  if (cuisine != "All") {
    filtered = filtered.filter((recipe) => recipe.cuisine == cuisine);
  } else {
    buildCuisineSelect(filtered);
  }
  showList(filtered);
}
// mealtype
function buildMealTypeSelect(recipes) {
  const mealTypes = Array.from(new Set(recipes.flatMap((recipe) => recipe.mealType)));
  const markup = mealTypes.map((mealType) => ` <option value="${mealType}" ${mealType == myMealType ? "selected" : ""}>${mealType}</option>`).join("");
  selectMealType.innerHTML = `<option value="All">All meal types</option> ${markup}`;
}

function filterMealType(event) {
  myMealType = event.target.value;

  filter("All");
}
