const inputName = document.querySelector('#name-input');
const spanChange = document.querySelector('#name-output');

inputName.addEventListener('input', nameSpanChange);

function nameSpanChange(event) {
    spanChange.textContent = event.currentTarget.value || 'Anonymous';
     
    
};