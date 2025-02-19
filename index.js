const kategoriContainer = document.querySelector("#kategori");
fetch(`https://dummyjson.com/recipes?limit=0`)
  .then((response) => response.json())
  .then((data) => showList(data.recipes));

function showList(recipes) {
  const mealTypes = Array.from(new Set(recipes.flatMap((recipe) => recipe.mealType))).sort();
  let images = {};
  for (mealType of mealTypes) {
    images[mealType] = recipes.filter((recipe) => recipe.mealType.includes(mealType))[0].id;
  }
  const markup = mealTypes.map((mealType) => `<a href="recipe_list.html?mealType=${mealType}"><img src="https://cdn.dummyjson.com/recipe-images/${images[mealType]}.webp" alt="${mealType}" />${mealType}</a>`).join("");
  kategoriContainer.innerHTML = markup;
}
