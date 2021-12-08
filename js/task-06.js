const inputEl = document.getElementById('validation-input');
const lengthInputEl = inputEl.dataset.length;

inputEl.addEventListener('blur', countLengthInput);

function countLengthInput(event) {
   if(event.currentTarget.value.length === Number(lengthInputEl)){
      event.currentTarget.classList.remove('invalid');
      event.currentTarget.classList.add('valid');
   } else {
      event.currentTarget.classList.remove('valid');
      event.currentTarget.classList.add('invalid');
   }
};


