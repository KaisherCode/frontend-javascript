// Seleccionar los elementos del DOM

const button = document.querySelector('button');
const color = document.getElementById('color');

function generateColorHexRandom() {
  let digits = '0123456789ABCDEF';
  let colorHex = '#';

  for (let i = 0; i < 6; i++) {
    let indiceRandom = Math.floor(Math.random() * 16);
    colorHex += digits[indiceRandom];
  }
  return colorHex;
}

button.addEventListener('click', function () {
  let colorRandom = generateColorHexRandom();

  color.textContent = colorRandom;

  document.body.style.backgroundColor = colorRandom;
})
