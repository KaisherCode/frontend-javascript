// FUNCTIONS

function greatings(name) {
  if (typeof name === "string") {
    console.log(`Hi ${name}, how are you?`)
  } else {
    console.log("Enter a valid name")
  }
}
greatings("katy"); // parameter is provided here

function getFullName(firstname, lastname) {
  if (typeof firstname === "string" && typeof lastname === "string") {
    return `${firstname} ${lastname}` // return values
  } else {
    console.log("Enter valid names")
  }
}

let fullName = getFullName("Sara", "Suárez")

console.log(fullName)

function sum(a, b) {
  return a + b;
}
let result = sum(2, 3);
console.log(`La suma de 2 + 3 es: ${result}`)

// Anonymous functions

let multiply = function (x, y, z) {
  return x + y + z;
}
const resp = multiply(1, 2, 3);
console.log(`La multiplicación de números es: ${resp}`)

// Autoinvocación
// (function (x,y,z) {
//   console.log(x+y+z);
// }(1,2,3)) 

// Function as const

const greating = function (nombre) {
  return `Hola ${nombre}`
}
console.log(greating("Jairo"))

// SCOPE

let apellido = "Jean" // scope grobal
apellido = "David"

function saludar() {
  let apellido = "Hernandez" // scope local
  console.log(`Hola ${apellido}`)
}

console.log(apellido) // output: David
saludar() // output: Hola Hernandez

const NOMBRE = "Robert" // scope global
const saludo = function () {
  const NOMBRE = "Juan" // scope local
  console.log(`Hola, ${NOMBRE}`)
}

console.log(NOMBRE) // output: Robert
saludo() // output: Hola, Juan

// ARROW FUNCTION
const sumar = (a, b) => a + b
console.log(sumar(2, 2)) // output: 4

const greatingHappy = name => {
  if (typeof name === "string") {
    return `Hola ${name}`
  } else {
    console.error("Ingrese nombre correcto!!")
  }
}

console.log(greatingHappy("Raúl")) // Hola Raúl