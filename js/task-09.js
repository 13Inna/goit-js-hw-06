function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btnChangeColor = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');

btnChangeColor.addEventListener('click', onBtnChangeColor);

function onBtnChangeColor() {
  let bodyColor = getRandomHexColor();
  document.body.style.backgroundColor = bodyColor;
  spanColorEl.textContent = `${document.body.style.backgroundColor}`;
}