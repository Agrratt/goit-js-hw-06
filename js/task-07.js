const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

textEl.style.fontSize = inputEl.value + "px";

function onInputTextSize(event) {
    textEl.style.fontSize = event.currentTarget.value + "px";
};

inputEl.addEventListener('input', onInputTextSize);

