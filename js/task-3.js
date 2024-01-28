const inputText = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output');

inputText.addEventListener('input', event => {
  if (event.target.value.trim() !== '') {
    spanText.textContent = event.target.value;
  } else spanText.textContent = 'Anonymous';
});
