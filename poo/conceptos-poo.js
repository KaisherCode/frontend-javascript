/**
 * OBJETOS LITERALES
 */

const actors = {
  // Atributos del objeto
  id: 1,
  name: "Antonio Banderas",
  dateBirth: "08-10-1960",
  birthPlace: "Málaga",
  nacionality: "Spain",
  dateDeath: "NA",
  placeDeath: "NA",

  // Métodos del objeto
  myIntroduction() {
    console.log(`Hello, my name is ${this.name} i'm from ${this.birthPlace} ${this.nacionality}`)
  }
}

console.log(actors)
console.log(actors.name)
console.log(actors["nacionality"])

/**
 * ASIGNACIÓN DE ATRIBUTOS
 */

actors.genero = "Maculino"
actors.placeDeath = "No aplica"
console.log(actors)

/**
 * NOTACIÓN ES6
 */

const firstname = "Kaisher"
const lastname = "Dev"
const age = 29
const father = {
  firstname: "Neo Leo",
  age: 62
}

const student = {
  firstname,
  lastname,
  age,
  father
}

console.log(student)

/**
 * ATRIBUTOS Y MÉTODOS
 */

const alumnos = {
  // Atributos del objeto
  nombres: "Andres Belaunde ",
  apellidos: "Hurtado",
  edad: 27,
  padre: {
    nombre: "Juan Aguilar",
    edad: 65
  },
  // Métodos del objeto
  presentarse() {
    console.log(`Hola, mi nombre es ${this.nombres} ${this.apellidos} y tengo ${this.edad}`)
  },
  quienEsTuPadre() {
    console.log(`Mi padre es ${alumnos.padre.nombre}`)
  }
}

// Ejecutar métodos
alumnos.presentarse()
alumnos.quienEsTuPadre()
actors.myIntroduction()