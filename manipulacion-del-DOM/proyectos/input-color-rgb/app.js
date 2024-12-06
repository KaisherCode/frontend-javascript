// Select DOM elements
const inputRed = document.getElementById('rojo');
const inputGreen = document.getElementById('verde');
const inputBlue = document.getElementById('azul');

const textRed = document.getElementById('text-rojo');
const textGreen = document.getElementById('text-verde');
const textBlue = document.getElementById('text-azul');

let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;

// Update text of paragraphs.
textRed.innerText = red;
textGreen.innerText = green;
textBlue.innerText = blue;

// Define the updateColor() function
function updateColor(red, green, blue) {
  const colorRGB = `rgb(${red},${green},${blue})`;
  document.body.style.backgroundColor = colorRGB;
}

// To update red color (R)
inputRed.addEventListener('change', (e) => {
  rojo = e.target.value;
  textRed.innerText = red;
  updateColor(red,green,blue);
});

// To update green color (G)
inputGreen.addEventListener('change',(e)=>{
  green = e.target.value;
  textGreen.innerText = green;
  updateColor(red,green,blue);
});

// To update blue color (B)
inputBlue.addEventListener('change',(e)=>{
  blue = e.target.value;
  textBlue.innerText = blue;
  updateColor(red,green,blue);
});


