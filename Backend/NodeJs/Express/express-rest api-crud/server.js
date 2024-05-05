/* Creacion de REST API */
const express = require("express");
const morgan = require("morgan");
const app = express();
/* app.use asi se identifican los middleware */
app.use(morgan("dev")); //para que morgan pueda mostrar los mensajes en consola
app.use(express.json()); //para que express pueda entender json
let products = [
  {
    id: 1,
    name: "laptop",
    price: 1000,
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});
app.post("/products", (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(
    newProduct
  ); /* el ...req.body crea un nuevo objeto con todos los elementos de body, mas un id, el simple hecho de poner los tres puntos indica
  que es todo lo que abarca el objeto */

  res.send(newProduct);
});
app.put("/products/:id", (req, res) => {
  const newData = req.body; // {price: 10, name: "new name"}
  const productFound = products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  if (!productFound) {
    return res.status(404).json({ message: "Product not found" });
  }

  products = products.map((p) =>
    p.id === parseInt(req.params.id) ? { ...p, ...newData } : p
  );
  res.json({
    message: "Product updated succesfully",
  });

  res.send("actualizando productos");
});

app.delete("/products/:id", (req, res) => {
  const productFound = products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  if (!productFound) {
    return res.status(404).json({ message: "Product not found" });
  }

  products = products.filter((p) => p.id !== parseInt(req.params.id));
  res.sendStatus(204);

  res.send("eliminando productos");
});

app.get("/products/:id", (req, res) => {
  const productFound = products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  if (!productFound) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(productFound);
});

app.listen(3000);
console.log(`server on port ${3000}`);
