/**Invitación a una fiesta
 * 
 * Si eres mayor de edad y menor de 65 años puedes asistir a la fiesta.
 * sino, si tienes permiso firmado de tus padres puedes venir a la fiesta.
 * sino, No puedes venir a la fiesta.
*/

// if, else if, else

let persona = "Kaisher"
let edad = 27
let permiso = true

if (edad >= 18 && edad < 65) {
  console.log(`Hola ${persona} puedes venir a la fiesta.`)
} else if (permiso && edad < 18) {
  console.log(`Hola ${persona} puedes venir a la fiesta. Tienes permiso`)
} else {
  console.log(`Hola ${persona} NO puedes venir a la fiesta.`)
}

// SWITCH
let dia = 1

switch (dia) {
  case 1:
    console.log("lunes")
    break
  case 2:
    console.log("martes")
    break
  case 3:
    console.log("miércoles")
    break
  case 4:
    console.log("jueves")
    break
  case 5:
    console.log("viernes")
    break
  case 6:
    console.log("sábado")
    break
  case 7:
    console.log("domingo")
    break
  default:
    console.log("Día no válido")
}

// CICLOS | BUCLES O LOOPS
// for

for (i = 0; i < 5; i++) {
  console.log(`Item : ${i}`)
}

let fruits = ["Orange", "apple", "banana", "strawberry", "grape", "blueberries"]

console.log(`Cantidad de frutas: ${fruits.length}`)
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruta: ${fruits[i]}`)
}

// while - mientras
let stock = 5

while (stock > 0) {
  stock--
  console.log(`Vendimos un producto nos quedan: ${stock}`)
}

