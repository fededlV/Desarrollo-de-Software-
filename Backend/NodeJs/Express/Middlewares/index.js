const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`Route: ${req.url} Method ${req.method} `);

  next();
}); //next indica que puede seguir el flujo de la peticion

app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.all("/about", (req, res) => {
  res.send("about page");
});

app.listen(3000);
console.log("Server is running on port 3000");
