const express = require("express");
const app = express();

app.get("/hello/:user", (req, res) => {
  // :user(Puede ser cualquier nombre de parametro) es un parametro que se puede cambiar por cualquier cosa
  //Para leer los parametros que te pasa el usuario, ves el cuerpo del contenido que envia el cliente.
  console.log(typeof req.params.user); //String
  res.send(`Hello ${req.params.user.toUpperCase()}`);
});

/* app.get("/add/:x/:y", (req, res) => {
  console.log(req.params.x);
  console.log(req.params.y);
  const result = parseInt(req.params.x) + parseInt(req.params.y);
  console.log(result);
  res.send(`Result: ${result}`);
}); --> Es una forma de obtener los parametros que le pasa el usuario*/

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  const result = parseInt(x) + parseInt(y);
  res.send(`Result: ${result}`);
  /* res.send(`Result: ${parseInt(x) + parseInt(y)}`)  OTRA FORMA*/
});

/* app.get("/add/:x/:y", ({params: {x, y}}, res) => {
    res.send(`Result: ${parseInt(x) + parseInt(y)}`)
}) Otra forma poco tipica para obterner los valores de los parametros.*/

app.get("/users/:username/photo", (req, res) => {
  console.log(req.params);
  if (req.params.username === "fede") {
    return res.sendFile("../descarga.png", {
      root: __dirname,
    });
  }
  res.send("El usuario no tiene acceso");
});

app.get("/nombre/:nombre/age/:age", (req, res) => {
  console.log(req.params);
  res.send(`El usuario ${req.params.nombre} tiene ${req.params.age} años.`);
});

app.listen(3000);
console.log(`Server on port ${3000}`);
