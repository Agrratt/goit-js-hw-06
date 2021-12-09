const formEl = document.querySelector('.login-form');
let message = '';

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const formElementsCollection = e.currentTarget.elements;
    const mail = formElementsCollection.email.value;
    const password = formElementsCollection.password.value;

    const formData = {
        mail,
        password
    };

    if (!mail || !password) {
      message = alert('Все поля должны быть заполнены');  
    }

    console.log(formData);
   formEl.reset();
};
