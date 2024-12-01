// OPERADORES aritméticos
let sum = 6 + 4
let rest = 10 - 5
let mult = 4 * 6
let division = 32 / 4
let rest_of_div = 60 % 4

console.log(`La suma es: ${sum}`)
console.log(`La resta es: ${rest}`)
console.log(`La multiplicación es: ${mult}`)
console.log(`La división es : ${division}`)
console.log(`El resto de la división es : ${rest_of_div}`)

// OPERADORES DE ASIGNACIÓN
let a = 10
let b = 4
let c = 2
/* sum */
a += b
/**
 * a -= b
 * a *= b
 * a /= b
 * a %= b
 * a **= b
 */
console.log(`La suma de a y b es: ${a}`)
console.log(`El número 2 elevado al cubo es: ${2 ** b}`)

// OPERADOR DE CONCATEANACIÓN
let firstname = "Kaisher"
let lastname = "Dev"

let fullname = firstname + " " + lastname
/** Template string o literal (``) */
console.log(`Mi nombre completo es: ${fullname}`)

// OPERADORES DE COMPARACIÓN
/** ES IGUAL (==) compara solo el valor */
let m = 50
let n = 10
resultado = m == n
console.log(`${m} es igual que ${n}: ${resultado}`)
// out false

let p = 40
let q = "40"
resp = p == q
console.log(`${p} es igual que ${q}: ${resp}`)
// out true

/** ESTRICTAMENTE IGUAL (===) Compara valor y tipo de dato */
let s = 100
let t = "100"
let answer = s === t
console.log(`${s} es igual que ${t}: ${answer}`)
// out false

// ES DIFERENTE | NO ES IGUAL (!=): Verifica si los valores son diferentes
let num1 = 24
let num2 = 5

let num3 = num1 != num2
console.log(`El número ${num1} es diferente que ${num2}?: ${num3} `)
// out true

// ESTRICTAMENTE IGUAL (!==)
let num4 = 34
let word = "34"

let respuesta = num4 !== word
console.log(`El número ${34} es diferente que ${word}?: ${respuesta}`)

// MAYOR QUE a > b
console.log(`Número ${num1} es mayor que ${num2}?: ${num1 > num2}`)

// MENOR QUE a < b
console.log(`Número ${num1} es menor que ${num2}?: ${num1 < num2}`)

// MAYOR O IGUAL QUE a >= b
console.log(`Número ${num1} es mayor o igual que ${num2}?: ${num1 >= num2}`)

// MENOR O IGUAL QUW a <= b
console.log(`Número ${num1} es menor o igual que ${num2}?: ${num1 <= num2}`)

// OPERADORES LÓGICOS AND (&&) OR (||)
// AND (&&)
/** Evaluar si 'x' es mayor que 'y' **y** si es 'x mayor que 'z' */
let x = 20, y = 10, z = 30
let res_eval_and = x > y && x > z
// true && false
console.log(`Evaluar si ${x} es mayor que ${y} y si es mayor que ${z}?: ${res_eval_and}`)
/** output: false */

// OR (||)
/** Evaluar si 'y' es mayor de 'x' o si 'y' es mayor que 'z'  */
let res_eval_or = y > x || x > z
// false || false
console.log(`Evaluar si ${y} es mayor que ${x} y si es mayor que ${z}?: ${res_eval_or}`)

// OPERADORES UNARIOS Y TERNARIOS

/** Operadores unarios */
/** Incremento sirve para aumentar una variable o dato númerico por una unidad */
b++
console.log(`El valor 4 aumentado en 1 es: ${b}`)
/** Decremento sirve para disminuir una variable o dato número por una unidad */
b--
console.log(`El valor 4 dismuido en 1 es: ${b}`)

/** Operadores ternarios
 * condicion? verdadero : falso
 */
let i = y > x ? "Es mayor" : "Es falso"
console.log(`Valor de 'y' es mayor que 'x': ${i}`)

// TYPE COERCION

/** JS convierte tipo númerico a string para luego concatenar. JS prioriza la implementación del operador de concatenación antes que la suma */
console.log(num4 + word)
// output: 3434

/** El signo '-' está relacionado con los operadores aritméticos, 
 * por lo tanto intentará convertir todos los datos a tipo númerico y realizar la operación
 *  */
console.log(t - num4)
// output: 66

/** NAN - Not a Number */
let numero = 50
let texto = "gato"
console.log(numero - texto)
// output: NaN

/** Booleanos */
let verdadero = true
let verdadero2 = true
console.log(verdadero + verdadero2)
// output: 2 