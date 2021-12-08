let counterValue = 0;

const buttonAdd = document.querySelector('button[data-action="increment"]');
const buttonRemove = document.querySelector('button[data-action="decrement"]');

buttonAdd.addEventListener('click', addButtonClick);
buttonRemove.addEventListener('click', removeButtonClick);

function addButtonClick (_event) {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
};

function removeButtonClick (_event) {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
};


console.log(counterValue);
