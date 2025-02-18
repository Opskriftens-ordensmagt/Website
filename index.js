const kategoriContainer = document.querySelector(".kategori");
fetch(`https://dummyjson.com/recipes/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = products.recipes
    .map((product) => ` <a href="recipe-list.html?mealType=${product.mealType}"><img src="https://cdn.dummyjson.com/recipe-images/9.webp" alt="" />${product.mealType}</a>`)
    .join("");
  kategoriContainer.innerHTML = markup;
}
