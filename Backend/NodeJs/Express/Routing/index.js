const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World")
}) //Cuando se accede a la ruta raíz, responde con "Hello World"

app.get("/about", (req, res) => {
    res.send("About")
}) //Cuando se accede a la ruta /about, responde con "About"

app.get("/weather", (req, res) => {
    res.send("The current weather is nice")
}) //Cuando se accede a la ruta /weather, responde con "The current weather is nice"

app.use((req, res) => {
    res.status(404).send("Not Found")
}) //Cuando lee todas las rutas y no encuentra ninguna, responde esto por default para cada una, manda un 404

app.listen(3000)
console.log(`Server is running on port ${3000}`)