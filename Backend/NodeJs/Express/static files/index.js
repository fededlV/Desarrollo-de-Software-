const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path"); /* Nos permite concatenar directorios */

app.use(morgan("dev"));
app.use(express.json());

app.get("/note.txt", (req, res) => {
  res.send("este no es un archivo");
}); /* Este tiene que estar antes del setting para que se acceda a esta ruta y no al archivo txt de la carpeta public */

console.log(__dirname); /* Nos da la ruta del archivo */
/* Primero se suele procesar las rutas y luego la carpeta static o public */
app.use(
  "/public",
  express.static(".././static")
); /* Todo lo de la carpeta public o static se puede acceder desde la pagina.
Para poder acceder a la ruta note.txt y tambien al archivo note.txt de la carpeta static lo que se puede hacer es especificar una ruta 
para que cuando se utilice esa ruta se acceda al contenido de la carpeta static */
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(3000);
console.log("Server on port 3000");
