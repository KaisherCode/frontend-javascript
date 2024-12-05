
const firstTopping = document.querySelector('.topping');
console.log(firstTopping.style);

// firstTopping.style.backgroundColor = "#FBDCE2";
// firstTopping.style.color = "#0ACDFF";
// firstTopping.style.textTransform = "uppercase";

const listToppings = document.getElementById('list-toppings');

console.log('> innerText');
console.log(listToppings.innerText);

console.log('> textContent');
console.log(listToppings.textContent);

console.log('> innerHTML');
console.log(listToppings.innerHTML);

// const title = document.getElementById('title');
// title.innerText = "Mis Toppings Favoritos";

// const link = document.getElementsByTagName('a');
// console.log(link[0].getAttribute('href'));

// console.log(link[0].removeAttribute('href'));
// console.log(link[0].setAttribute('href','https://freecodecamp.org/'))

firstTopping.classList.add('text-gold');
console.log(firstTopping.classList);

console.log(firstTopping.classList.contains('fondo-marron'));// output: true

firstTopping.classList.remove('text-gold');