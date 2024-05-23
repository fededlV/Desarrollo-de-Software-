import express from "express";
import * as publico from "./routers/public.js";
import * as privado from "./routers/private.js";
import { sequelize } from "./data/config.js";

const app = express();
app.use(express.json());

//Registramos los routers
app.use("/private", privado.router);
app.use("/public", publico.router);

app.listen(3001, async () => {
  console.log("Server on PORT 3001...");
  await sequelize.sync();
});
