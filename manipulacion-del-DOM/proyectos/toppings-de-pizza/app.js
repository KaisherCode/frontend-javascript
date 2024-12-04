
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

const title = document.getElementById('title');
title.innerText = "Mis Toppings Favoritos";