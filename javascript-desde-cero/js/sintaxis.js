// Esto es un comentario de una sola línea.

/**
 * Esto es comentario de varios líneas de 
 * comentarios. Llamado también multilinea.
 */

// NUMBER
console.log(typeof 50)
// number

// STRING 
console.log(typeof 'Kaisher')
// string

// BOOLEAN
console.log(typeof false)
// boolean

// OBJETOS:
/* ARRAY (arreglo) - Colección de datos */
console.log(typeof ["Jose","Maria","Juan","Diego"])
/* OBJETO */
console.log(typeof {
    name: "Kaisher",
    lastName: "Dev"
})
/* OBJETO NULO null */
console.log(typeof null)

// DECLARACIÓN
let student
console.log(typeof student ) /** undefined */

// ASIGNACIÓN
student = "Kaisher Dev"
console.log(`El nombre del estudiante es: ${student}`)

// DECLARACIÓN Y ASIGNACIÓN
let teacher = "Diego Porta"
console.log(`El nombre de profesor es: ${teacher}`)

// REASIGNACIÓN
teacher = "Richard Arce"
console.log(`El nuevo profesor es: ${teacher}`)

// ASIGNACIÓN POR REFERENCIA
let admin = "Jesús"
let user = admin

admin = "Josúe"
user = "Victor"

console.log(`El admin es: ${admin}`)
console.log(`El user es: ${user}`)

// CONSTANTES
const COMPANY_NAME = "company-name"
const WEB_SITE = "https://tudominio.com"
