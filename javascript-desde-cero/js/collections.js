// ARRAY METHODS

const students = ["Bill", "Junior", "Beto", "Martín"]
console.log(students) // output: ['Bill', 'Junior', 'Beto', 'Martín']

/** Method push */
const student = students.push("Julian") // method push
console.log(student) // output: 5
console.log(students) // output: ['Bill', 'Junior', 'Beto', 'Martín', 'Julian']

/** Method pop */
const removeStudent = students.pop()
console.log(`Se ha removido student: ${removeStudent}`)
console.log(`La nueva lista actualizada es: `, students)

/** Method slice - not modify array*/
const newList = students.slice(0, 2)
console.log(`New List get slice method:`, newList)
console.log(`Original list: `, students)

/** forEach - Solo itera sobre cada item del array.
 * 
 * No devuelve dato
 * 
 *  */
const teachers = ["Miguel", "Amy"]
const dato = teachers.forEach(teacher => console.log(`Hola ${teacher}`)) // no data saved
console.log(dato) // output: undefined

/** Method .map()
 * 
 * Si devuelve un nuevo dato
*/
const newTeachers = teachers.map(teacher => `Hola ${teacher}`)
console.log(teachers)
console.log(newTeachers)

/** Method filter */
const numbers = [4, 15, 18, 23, 45, 89, 90]
console.log(`Number list`, numbers)
const newNumbers = numbers.filter(number => number > 20)
console.log(`New numbers >20: `, newNumbers)

/** Method find */
const findNumber = numbers.find(num => num > 20)
console.log(`El primer número mayor que 20 es: `, findNumber)

/** Method includes */
const includeNumber = numbers.includes(45)
console.log(`El número 45 está incluido en el array: `, includeNumber)

/** Method some */
const someNumber = numbers.some(num => num > 0)
console.log(`Algun número del array es mayor de 0: `, someNumber)

/** Method every */
const everyNumber = numbers.every(num => typeof num === "number")
console.log(`Todos los elementos son de tipo number?: `, everyNumber)

// TEXT MANIPULATION

/** Method slice */
const writerName = "Jorge Mario Pedro Vargas Llosa"
const sliceWriterName = writerName.slice(3)
console.log(`El nombre del escritor: `, sliceWriterName)
// output: ge Mario Pedro Vargas Llosa

const sliceWriterName2 = writerName.slice(3, 10)
console.log(`El nombre del escritor: `, sliceWriterName2)
// output: ge Mari

// Method split
const splitWriterName = writerName.split(" ")
console.log(`El nuevo array es: `, splitWriterName)

// Method search

// Method to...
const uppercaseWriterName = writerName.toUpperCase()
console.log(`Nombre del escritor en mayúscula: `, uppercaseWriterName)

// OBJECTS - Values and atributes

const products = {
    title: "Camisa",
    description: "Camisa hiller azul para hombre",
    price: 79,
    image: "https://tudominio.com/image/"
}

const productValues = Object.values(products)
console.log(productValues)

const productAtributes = Object.keys(products)
console.log(productAtributes)

console.log(products["price"]) // output: 79

// MATH 
const randomValue = Math.random()
console.log(randomValue)

const randomValue2 = Math.random() * 10
console.log(randomValue2)

const PIvalue = Math.PI
console.log(PIvalue)

const sqrtValue = Math.SQRT2
console.log(sqrtValue)

const maxValue = Math.max(2, 4, 6, 8, 10)
console.log(maxValue)

const minValue = Math.min(5, 10, 15, 20)
console.log(minValue)

const powValue = Math.pow(2, 5) // output: 2 elevado al 5 = 32
console.log(powValue)

const floorValue = Math.floor(-3.7) // output: -4
console.log(floorValue)

// DATE 
const newDate = new Date()
console.log(newDate)

const fullYear = newDate.getFullYear()
console.log(fullYear)

const month = newDate.getMonth()
console.log(month)


