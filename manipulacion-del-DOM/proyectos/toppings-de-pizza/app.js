
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

const newTopping = document.createElement('li');

newTopping.classList.add('topping','fondo-marron');
listToppings.append(newTopping);
newTopping.innerText = "Queso extra";

newTopping.remove();

/** 
 * .appendChild()
 * 
 * Sirve para agregar elemento al igual que .append()
 * */

// listToppings.appendChild(newTopping)

console.log(listToppings.parentElement);
console.log(listToppings.parentNode);
console.log(listToppings.parentElement.parentElement);
console.log(listToppings.children);
console.log(listToppings.firstChild);
console.log(listToppings.children[0]);
console.log(listToppings.lastChild);
console.log(listToppings.firstElementChild);
console.log(listToppings.lastElementChild);
console.log(listToppings.previousElementSibling);
console.log(listToppings.nextElementSibling);
console.log(listToppings.firstElementChild.firstElementChild);

function mostrarClick(topping){
    console.log(topping)
}