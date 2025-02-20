const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const recipeId = urlParams.get("id");

let recipeContainer = document.querySelector("#recipeContainer");
fetch(`https://dummyjson.com/recipes/${recipeId}`)
  .then((response) => response.json())
  .then((data) => {
    recipeContainer.innerHTML = `

    <div class="grid_1-2 max_width">
        <img src="https://cdn.dummyjson.com/recipe-images/${recipeId}.webp" alt="photo of ${data.name}" />
        <div class="info">
          <h1>${data.name}</h1>
          <div class="flex">
            <p>☆ ${data.rating} (${data.reviewCount} reviews)</p>
            <p>&#9202; ${data.prepTimeMinutes + data.cookTimeMinutes} Minutes</p>
          </div>
          <div class="light">
          
            <a href="">${data.tags.map((tag) => "<a href=''>" + tag + "</a>").join("")}
          </div>
        </div>
      </div>

      <div class="ingredientsAndInstructions">
        <div class="grid_1-1 max_width">
          <div>
            <h2>Ingredients</h2>
            <ul>
             ${data.ingredients.map((ingredient) => "<li>" + ingredient + "</li>").join("")}
     
            </ul>
          </div>
          <div>
            <h2>Instructions</h2>
            <ol>
            ${data.instructions.map((Instruction) => "<li>" + Instruction + "</li>").join("")}
            </ol>
          </div>
        </div>
      </div>
      `;

    document.querySelector("title").innerHTML = `${data.name}`;
    // other dishes in same category
    document.querySelector(".h2").innerHTML = `<h2>Other ${data.cuisine} dishes:</h2>`;

    const otherRecipes = document.querySelector("#other");
    fetch(`https://dummyjson.com/recipes/tag/${data.cuisine}?limit=0`)
      .then((response) => response.json())
      .then((data) => showList(data));

    function showList(recipes) {    
      const markup = recipes.recipes
        .sort((r) => Math.random() - 0.5)
        .slice(0, 3)
        .map(
          (recipe) => `
      <a href="single_recipe.html?id=${recipe.id}"  class="recipe_card">
      <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="photo of ${recipe.name}" />   
      <p class=" text">${recipe.cookTimeMinutes + recipe.prepTimeMinutes} min &#9202;</p>
      <h3 class="text">${recipe.name}</h3>
      <p class=" text">${recipe.mealType}</p>
      </a>`
        )
        .join("");
      otherRecipes.innerHTML = markup;
    }
  });
