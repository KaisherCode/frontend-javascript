const user = {
  userName: "Kaisher",
  edad: 32,
  deuda: 0
}

const order = []

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