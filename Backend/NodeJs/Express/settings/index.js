const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

//settings
app.set(
  "appName",
  "Express Course"
); /* set es para establecerle el valor a una variable, y con get podemos obtener el valor de esa variable. */
app.set("case sensitive routing", true); //Esto va a ser que al escribir la ruta se tenga que escribir exactamente igual a como está en el código, si no, la ruta no se encuentra.
app.set("port", 4000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.get("/note.txt", (req, res) => {
  res.sendFile("este no es un archivo");
});

app.get("/UserName", (req, res) => {
  res.send("username route");
});

app.listen(app.get("port"));
console.log(`Server ${app.get("appName")} on port ${app.get("port")}`);
