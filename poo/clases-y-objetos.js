/**
 * REDUNDANCIA
 * - En programación se debe evitar la redundancia
 * 
 * Objecto
 * - Atributos: firstName:"kasiher" ...
 * - Métodos: myIntroduction()...
 */
const user = {
  firstName: "Kaisher",
  lastName: "Kiesler",
  email: "kaisher.kiesler@gmail.com",
  isActive: true,
  myIntroduction() {
    console.log(`¡Hola!, mi nombre es ${this.firstName} ${this.lastName}`)
  }
}

console.log(user.myIntroduction())

/**
 * FUNCTION CONSTRUCTOR - FUNCIÓN CONSTRUCTORA: 
 * 
 * - Se utiliza para crear objetos.
 * - Se llama 'constructora' porque crea una nueva instancia de un objeto a partir de una clase, prototipo o molde. 
 * 
 * CARACTERÍSTICAS
 * - Como es un molde se declara con Mayúscula la 1ra letra y en singular. Ejemplo. 'User'
 * - Se utiliza con la palabra reservada 'new' para crear un objeto.
 * - Puede tener parámetros para inicializar las propedades del objeto.
 * - Las funciones constructoras fueron utilizadas hasta ES6.
 */

function Usuario(firstName, lastName, email, isActive) {
  this.firstName = firstName,
    this.lastName = lastName,
    this.email = email,
    this.isActive = isActive
}

const kelly = new Usuario("Kelly", "Spadaro", "k.spark@gmail.com", true)
console.log(kelly)

/**
 * CLASES
 * 
 * - La POO permite escribir 'Clases' que van a ser los moldes y, a partir de estas clases podrás crear los objetos que necesites.
 * - Para declarar una clase se utiliza la palabra resevada 'class' y el nombre de la clase. Dentro de la clase se encuentra el
 *   el método 'constructor', el cuál recibe parámetros entre parentesis (). El método constructor recibe los mismos parámetros.
 * 
 * getters y setters
 * 
 * - Son métodos especiales que permiten acceder y modificar las propiedades de un objeto.
 * - GET --> Obtener
 * - SET --> Dar
 * 
 * HERENCIA
 * - Permite que un objeto nuevo (hijo) herede las propiedades y métodos de otro objeto existente (padre).
 * - La herencia es la capacidad de un objeto de heredar las características de otro objeto,
 *   lo que permite crear objetos más complejos y reutilizar código.
 * - Método super()
 * 
 * Nota: 
 * - Subject --> Materia (HTML,CSS,JavaScript)
 * - Course --> Curso (HTML,Python,React)
 * 
 */

class User {
  constructor(firstName, lastName, email, isActive) {
    this.firstName = firstName,
      this.lastName = lastName,
      this.email = email,
      this.isActive = isActive
  }
  greetin() {
    return `Hola, mi nombre es ${this.firstName}.`
  }

  // gettters & setters

  getFirstName() {
    return this.firstName
  }
  getLastName() {
    return this.lastName
  }
  setLastName(newLastName) {
    return this.lastName = newLastName
  }
}

class Teacher extends User {
  constructor(firstName, lastName, email, isActive, subject) {
    super(firstName, lastName, email, isActive)
    this.subject = subject
  }

  teaching() {
    return `Soy profesor del curso de ${this.subject}.`
  }
}

class Student extends User {
  constructor(firstName, lastName, email, isActive, course) {
    super(firstName, lastName, email, isActive)
    this.course = course
  }

  study() {
    return `Estoy estudiando el curso de ${this.course}.`
  }
}

// Instanciar un objeto a partir de una clase, prototipo o molde utilizando la palabra reservada 'new'
const ada = new Teacher("Ada", "Byron", "a.byron@gmail.com", true, ["Ruby", "Java", "Python"])
const hedy = new Student("Hedy", "Lamarr", "h.lamarr@gmail.com", true, ["HTML", "CSS", "JavaScript"])
console.log(ada)
console.log(hedy)

console.log(`${ada.getFirstName()} ${ada.getLastName()}`)

console.log(hedy.setLastName("Kiesler"))
console.log(ada.getLastName())