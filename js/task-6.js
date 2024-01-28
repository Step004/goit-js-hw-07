function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const deleteButton = document.querySelector('[data-destroy]');

function createBoxes(event) {
  if (event >= 1 && event <= 100) {
    for (let i = 0; i < event; i++) {
      const box = document.createElement('div');
      box.style.width = 30 + i * 10 + 'px';
      box.style.height = 30 + i * 10 + 'px';
      box.style.background = getRandomHexColor();
      boxes.appendChild(box);
    }
  }
}

function numToInt(event) {
  event.preventDefault();
  const valueNum = input.value;
  const reloadNum = parseInt(valueNum, 10);
  if (reloadNum) {
    createBoxes(reloadNum);
  }
  input.value = '';
}

function destroyBoxes(event) {
  event.preventDefault();
  boxes.innerHTML = '';
}

createButton.addEventListener('click', numToInt);
deleteButton.addEventListener('click', destroyBoxes);
