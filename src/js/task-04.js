let counterValue = 0;
const btnEl = {
    btnDecrement: document.querySelector(`button[data-action="decrement"]`),
    btnIncrement: document.querySelector('button[data-action="increment"]'),
    value: document.querySelector('#value'),
};
console.log(btnEl.btnDecrement);
console.log(btnEl.btnIncrement);
console.log(btnEl.value);
const btnClick = (element) => {
    counterValue += element;
    btnEl.value.textContent = counterValue;
}
btnEl.btnDecrement.addEventListener('click', () => btnClick(-1));
btnEl.btnIncrement.addEventListener('click', () => btnClick(+1));