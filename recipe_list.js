const urlParams = new URLSearchParams(window.location.search);
const myCategory = urlParams.get("category");

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://dummyjson.com/recipes/?limit=0")
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched Recipes:", data.recipes); // Debugging: Log fetched data
      showRecipes(data.recipes);
    })
    .catch((error) => console.error("Error fetching recipes:", error));
});

function showRecipes(recipes) {
  const categories = ["Breakfast", "Lunch", "Brunch", "Dinner", "Dessert"];
  const mainContainer = document.querySelector("main");

  let markup = ""; // Create an empty string to store the HTML

  categories.forEach((category) => {
    // Filter recipes by category
    const filteredRecipes = recipes.filter((recipe) => recipe.mealType.includes(category));

    if (filteredRecipes.length > 0) {
      // Add category title and recipe container
      markup += `
                <h1>${category}</h1>
        <div class="recipe-container">
                    ${filteredRecipes
                      .map(
                        (recipe) => `
                            <div class="recipe">
                                <a href="single_recipe.html?id=${recipe.id}">
                                    <img src="${recipe.image || "fallback-image.jpg"}" alt="${recipe.name}" />
                                </a>
                                <div class="recipe-info">
                                    <p>${recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</p>
                                    <h3>${recipe.name}</h3>
                                    <p>${category}</p>
                                </div>
                            </div>
                        `
                      )
                      .join("")}
                </div>
            `;
    }
  });

  // Insert the entire HTML into the main container
  mainContainer.innerHTML = markup;
}
