/**
 * 1. Mostrar el menú disponible
 * 2. Permitir que el usuario pida lista de menú
 * 3. Mostrar el costo total que el usuario debe pagar
 * 4. Cobrar al usuario
 * 5. Reportar el monto total de las ventas realizadas.
 */

// Client
const user = {
  userName: "Kaisher",
  edad: 32,
  deuda: 0
}

let order = []
let salesAmount = 0

const showMenu = () => {
  console.log(`CÓDIGO - NOMBRE PRODUCTO - PRECIO`)

  for (let product of products) {
    console.log(`${product.id} - ${product.title} - S/ ${product.price}`)
  }
}

const orderProduct = cod => {
  if (!cod) return "Ingrese un código válido"

  const productFound = products.find(product => product.id === cod)
  if (!productFound) return "El producto no existe."

  order.push(productFound)
  console.log("El producto ha sido agregado a su pedido. Su pedido es:")
  return viewOrder()
}

const viewOrder = () => order

const calculateCost = () => {
  if (order.length === 0) return "Tu pedido está vacío"

  costoTotal = 0
  for (product of order) {
    costoTotal += product.price
  }
  user.deuda = costoTotal
  return costoTotal
}

const completeOrder = () => {
  calculateCost()

  order = []
  costoTotal = 0
  return `${user.userName}, tu deuda total a pagar es: S/ ${user.deuda} soles`
}

const payOrder = amountProvided => {
  if (typeof amountProvided ==="number"){
    if (amountProvided < user.deuda) {
      return `No te alcanza para pagar tu pedido. Te faltan ${user.deuda - amountProvided}`
    } else if (amountProvided === user.deuda) {
      salesAmount += user.deuda
      user.deuda = 0
      return `Tu deuda a sido pagado. Garcias por su compra!`
    } else {
      const returned = amountProvided - user.deuda
      salesAmount += user.deuda
      user.deuda = 0
      return `Tu pedido ha sido pagado. Tu vuelto es de S/ ${returned}`
    }
  } else{
    return `Ingrese un monto válido`
  }
  
}

const viewSalesAmount = () => `Total de ventas realizadas S/ ${salesAmount}`