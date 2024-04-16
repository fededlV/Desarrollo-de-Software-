import  Product  from "./product.js"
export class ProductManager {
    constructor(n) {
        //this.products = new Array(n);
        //this.products = [];
        this.products = this.Init(n)
    }
    Init(n) {
        const products = []
        for (let i = 0; i < n; i++) {
            let name = `Product#${i}`
            let price = Math.round(Math.random() * 100)
            const prod = new Product(i, name, price)
            products.push(prod)
        }
        return products
    }
    listProducts(ref){
        let report = ""
        /* this.products.forEach((e) => {
            report += e.toString() + "\n"
        }); */
        this.products.filter((e) => {
            if(e.price >= ref){
                report += e.toString() + "\n"
            }
        })
        return report
    }
}