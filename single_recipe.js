const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id");

let recipeContainer = document.querySelector("#bla");
fetch(`https://dummyjson.com/recipes/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    recipeContainer.innerHTML = `

    <div class="grid_1-2 max_width">
        <img src="https://cdn.dummyjson.com/recipe-images/${productId}.webp" alt="${data.productdisplayname} " />
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

      <div class="orange_box">
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

    // other dishes in same category
    document.querySelector(".h2").innerHTML = `<h2>Other ${data.cuisine} dishes:</h2>`;

    const otherProducts = document.querySelector("#other");
    fetch(`https://dummyjson.com/recipes/tag/${data.cuisine}?limit=3`)
      .then((response) => response.json())
      .then((data) => showList(data));

    function showList(products) {
      console.log(products);
      const markup = products.recipes
        .map(
          (product) => `
      <a href="single_recipe.html?id=${product.id}"  class="recipe_card">
      <img src="https://cdn.dummyjson.com/recipe-images/${product.id}.webp" alt="${product.name}" />   
      <p class="light text">${product.cookTimeMinutes + product.prepTimeMinutes} Minutes</p>
      <h3 class="text">${product.name}</h3>
      <p class="light text">${product.mealType}</p>
      </a>`
        )
        .join("");
      otherProducts.innerHTML = markup;
    }
  });
