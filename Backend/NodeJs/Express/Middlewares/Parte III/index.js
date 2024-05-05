const express = require("express");
const app = express();
const morgan = require("morgan");

app.all("/about", (req, res) => {
  res.send("about page");
});

app.use(express.json());

app.use(
  morgan("dev")
); /* dev ->  :method :url :status :response-time ms - :res[content-length] */

/* app.use((req, res, next) => {
  if (req.query.login === "fede@fede.com") {
    next();
  } else {
    res.send("No tienes permisos para acceder a esta ruta");
  }
});
 */
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
