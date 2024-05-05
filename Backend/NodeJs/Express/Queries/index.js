const express = require("express");

const app = express();

app.get("/search", (req, res) => {
  console.log(req.query);
  if (req.query.q === "javascript books") {
    res.send("lista de libros javascript");
  } else {
    res.send("pagina normal");
  }
});

app.get("/hello/:username", (req, res) => {
  console.log(req.query.user); //Para poder interpretar el valor, de la query
  console.log(req.query.age); //Para poder interpretar el valor, de la query
  res.send(`hello ${req.params.username}`);
});

app.listen(3000);
console.log("Server is running on port 3000");
