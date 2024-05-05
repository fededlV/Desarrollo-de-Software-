const express = require("express");
const app = express();

app.all("/info", (req, res) => {
  res.send("Server info");
}); //all nos permite a nosotros definir un metodo que se va a ejecutar para cualquier tipo de peticion

app.listen(3000);
console.log("Server is running on port 3000");
