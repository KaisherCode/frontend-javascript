const products = [
    {
        id: "H100",
        title: "Hamburguesa la hynko",
        price: 12.90,
        image: "https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "H200",
        title: "Hamburguesa clásica hynko",
        price: 17.90,
        image: "https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "H300",
        title: "Hamburguesa hynko",
        price: 19.90,
        image: "https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "I100",
        title: "Inka hynko sabor original 500ml",
        price: 5.90,
        image: "https://images.unsplash.com/photo-1623944890676-9d5d57a6f7e9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "P100",
        title: "Papas fritas hynko",
        price: 5.90,
        image: "https://images.unsplash.com/photo-1529259266118-cf22737f713f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

]

const showMenu = () => {
    console.log(`CÓDIGO - NOMBRE PRODUCTO - PRECIO`)
    // products.forEach(product => console.log(`${product.id} - ${product.title} - S/ ${product.price}`))

    for (let product of products) {
        console.log(`${product.id} - ${product.title} - S/ ${product.price}`)
    }
}



