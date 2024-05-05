const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
require("ejs"); //Crear multiples vistas html con ejs

const HomeRoutes = require("./home");
const UserRoutes = require("./users");

//setting
app.set("case sentitive routing", true);
app.set("appName", "Express Routing");
app.set("port", 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //Se indica la carpeta de las vistas

//middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use(HomeRoutes); //Se incluyen las rutas de home
app.use(UserRoutes); //Se incluyen las rutas de users

//routes
app.use("/public", express.static(path.join(__dirname, "static")));

app.listen(app.get("port"));
console.log(`${app.get("appName")} is running on port ${app.get("port")}`);
