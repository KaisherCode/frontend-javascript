const showMenu = () => {
  console.log(`CÓDIGO - NOMBRE PRODUCTO - PRECIO`)

  for (let product of products) {
    console.log(`${product.id} - ${product.title} - S/ ${product.price}`)
  }
}



