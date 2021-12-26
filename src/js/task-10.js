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
const refs = {
  create: document.querySelector('[data-create="Create"]'),
  destroy: document.querySelector('[data-destroy="Destroy"]'),
  boxes: document.getElementById('boxes'),
};


refs.create.addEventListener('click', getAmount);
refs.destroy.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = +document.querySelector('#controls input').value;
  createBoxes(amount);
}
function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (const i = 0; i < amount; i++) {
    const size = basicSize + i * 10;
    const div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${getRandomHexColor()} , ${getRandomHexColor()} , ${getRandomHexColor()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
