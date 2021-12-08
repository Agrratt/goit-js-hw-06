//======= 1 =======
const numCategories = document.querySelectorAll('.item');
console.log('Number of categories:', numCategories.length);

//======= 2 =======
numCategories.forEach(element => {
    const nameCategory = element.querySelector('h2');
    const numElements = element.querySelectorAll('li').length;

    console.log('Category:', nameCategory.textContent);
    console.log('Elements:', numElements);
});

