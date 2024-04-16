import  ProductManager  from "./domain/product_manager.js"
function main() {
    const manager = new ProductManager(10)
    console.log(manager.listProducts(200))   
}

main()