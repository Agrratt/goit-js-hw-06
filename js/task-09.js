const btnEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function changeColor(e) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanColorEl.textContent = color;
 
};

btnEl.addEventListener('click', changeColor);



