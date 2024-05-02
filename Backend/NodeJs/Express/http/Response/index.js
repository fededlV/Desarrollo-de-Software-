const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/miArchivo", (req, res) => {
  res.sendFile("./descarga.png", {
    //Enviamos como respuesta un archivo, en este caso una imagen
    root: __dirname, //Nos dice donde esta nuestro archivo desde la ruta inicial del disco duro
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "Fede",
    lastname: "de la Vega",
    age: 25,
    points: [1, 2, 3],
    address: {
      city: "Buenos Aires",
      street: "Calle falsa 123",
    },
  }); //Respondemos un json
});

app.get("/isAlive", (req, res) => {
  res.sendStatus(204); //Envia un codigo de estado 204, el cual no tiene contenido
});

app.listen(3000);
console.log("Server is running on port 3000");
