const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
require("ejs"); //Crear multiples vistas html con ejs
const homeRoutes = require("./home");

app.set("appName", "Async Code");
app.set("port", 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(morgan("dev"));
app.use(express.json());
app.use(homeRoutes);

app.listen(app.get("port"));
console.log(`${app.get("appName")} is running on port ${app.get("port")}`);
