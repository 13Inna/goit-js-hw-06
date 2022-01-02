
let numberBoxes = 0;

const inputChange = document.querySelector('#controls input');
const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');
const boxes = document.querySelector('div#boxes');

const createBoxes = amount => {
    for (let i = 0; i < amount; i += 1) {
    const basicSize = 30;
    const biggestSize = basicSize + i * 10;
    const div = document.createElement('div');
      div.setAttribute('style',
        `width: ${biggestSize}px; 
        height: ${biggestSize}px; 
        background: ${getRandomHexColor()}`);
      boxes.append(div);
    }
  };

createBtn.addEventListener('click', e => {
  createBoxes(numberBoxes);
});
inputChange.addEventListener('input', e => {
   numberBoxes = e.target.value;
});

 destroyBtn.addEventListener('click', e => {
  boxes.innerHTML = '';
}); 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



