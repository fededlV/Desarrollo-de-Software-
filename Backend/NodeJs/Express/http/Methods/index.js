const express = require('express');

const app = express();

app.get("/products", (req, res) => {
    // validate data 
    // query a database 
    // process data
    res.send("GET PRODUCTS");
})

app.post("/products", (req, res) => {
    res.send("Creando productos");
})

app.put("/products", (req, res) => {
    res.send("actualizando producto");
})

app.delete("/products", (req, res) => {
    res.send("eliminando un producto.");
})

app.patch("/products", (req, res) => {
    res.send("Guardando una parte del producto.");
})

app.listen(3000)
console.log("Server is running on port 3000");