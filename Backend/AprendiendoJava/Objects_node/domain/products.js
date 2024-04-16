class Product {
  constructor(cod, name, price) {
    this.cod = cod;
    this.name = name;
    this.price = price;
  }
  toString() {
    return `# ${this.cod} \t|\t ${this.name} \t|\t $${this.price}`;
  }
}

export default Product

/* const products = new Product(1, 'Product 1', 100)
console.log(products.toString()) */