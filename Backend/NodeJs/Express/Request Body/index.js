const express = require("express");
const app = express();

app.use(express.text()); //Para que express pueda leer el texto que envia el cliente
app.use(express.json()); //Para que express pueda leer el json que envia el cliente
app.use(
  express.urlencoded({
    extended: false /* Indica que es una url simple, como datos que son solo texto */,
  })
); //Para que express pueda entender los datos que vienen de un formulario

app.post("/user", (req, res) => {
  console.log(req.body); //Para leer el texto que te pasa el usuario, ves el cuerpo del contenido que envia el cliente.
  res.send("User created");
});

app.listen(3000);
console.log(`Server on port ${3000}`);
