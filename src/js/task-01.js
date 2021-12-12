const categoriesEl = document.querySelectorAll('li.item');
console.log('Number of categories:', categoriesEl.length);

categoriesEl.forEach(element => {
    const titleEL = element.querySelector('h2');
    const elementsUlEl = element.querySelectorAll('li');

console.log(`Category:`, titleEL.textContent);
console.log('Elements:', elementsUlEl.length);
});












