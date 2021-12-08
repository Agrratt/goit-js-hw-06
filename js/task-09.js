const btnEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function changeColor(e) {
  // e.preventDefault();
  document.body.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = getRandomHexColor();
}

btnEl.addEventListener('click', changeColor);



