const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let addItem;

ingredients.forEach(element => {
  addItem = document.createElement('li');
  addItem.textContent = element;
  addItem.classList.add('item');

  console.log(addItem);

  const listEl = document.querySelector('#ingredients');
  listEl.append(addItem);
 });



