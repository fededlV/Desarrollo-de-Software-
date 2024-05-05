const express = require("express");
const app = express();

app.all("/about", (req, res) => {
  res.send("about page");
});

app.use((req, res, next) => {
  console.log(`Route: ${req.url} Method ${req.method} `);

  next();
}); /* Este middleware no interrumple el flujo, solo muestra la ruta y el motodo de request y continua. */

app.use((req, res, next) => {
  if (req.query.login === "fede@fede.com") {
    next();
  } else {
    res.send("No tienes permisos para acceder a esta ruta");
  }
});
/* Estos dos middlewares lo que hacen es aplicarlas para todas las proximas rutas que les sigue, asi que tendriamos que cumplirlas 
para todas las rutas, si no queremos que sea asi tendriamos que colocar las rutas que no queremos que se les apliquen estos middlewares 
antes de estos mismos. */

app.get("/dashboard", (req, res) => {
  res.send("Dashboard page");
});

app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.all("/about", (req, res) => {
  res.send("about page");
});

app.listen(3000);
console.log("Server is running on port 3000");
