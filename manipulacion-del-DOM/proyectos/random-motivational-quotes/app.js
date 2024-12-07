// Select HTML elements
const buttonElem = document.getElementById('button-change-qoute');
const qouteElem = document.getElementById('qoute');
const authorElem = document.getElementById('author');

// To generate random indexes
function generateIntRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// Select a random qoute
function changeQoute() {
  let indiceRandom = generateIntRandom(0, qoutes.length);
  qouteElem.innerText = `"${qoutes[indiceRandom].texto}"`;
  authorElem.innerText = qoutes[indiceRandom].autor;
}

// Select a random qoute when the application starts
let indiceRandom = generateIntRandom(0,qoutes.length);
changeQoute();

// to change qoute click on the button
buttonElem.addEventListener('click', changeQoute);