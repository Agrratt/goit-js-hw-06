const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

inputEl.addEventListener('input', onInputTextSize);

function onInputTextSize(event) {
    textEl.style.fontSize = event.currentTarget.value + "px";
};