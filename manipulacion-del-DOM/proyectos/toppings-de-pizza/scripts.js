// Alternativa 1

// const toppings = document.getElementsByClassName('topping');
//
// function mostrarClick(e) {
//     console.log(e.target.innerText);
// }
//
// for (const topping of toppings) {
//     topping.addEventListener('click', mostrarClick);
// }

// Alternativa 2

const toppings = document.getElementsByClassName('topping');

for (const topping of toppings) {
    topping.addEventListener('click', (e) => console.log(e.target.innerText));
}