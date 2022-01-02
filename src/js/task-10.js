//Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
//после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

//<div id="controls">
  //<button type="button" data-create>Create</button>
  //<input type="number" min="1" max="100" step="1" />
  //<button type="button" data-create>Create</button>
 // <button type="button" data-destroy>Destroy</button>
//</div>

//<div id="boxes"></div>
//Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, 
//сколько указано в amount и добавляет их в div#boxes.

//Размеры самого первого <div> - 30px на 30px.
//Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
//Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
//Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.//

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



