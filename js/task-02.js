const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainerEl = document.querySelector("#ingredients");

const makeIngredientOptions = options => {
  return options.map(name => {
    const ingredientList = document.createElement('li');
    ingredientList.textContent = name;
    ingredientList.classList.add("item");
    return ingredientList;
  }

  );
};
const elements = makeIngredientOptions(ingredients);
ingredientsContainerEl.append(...elements);