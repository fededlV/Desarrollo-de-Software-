const express = require("express");
const cors = require("cors");
const service = require("./services/services.js");
const db = require("./data/db.js");
const { DBinit } = require("./data/db.js");
const port = 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/locales", async (req, res) => {
  const result = await service.theyAreAR();
  res.json(result);
});

app.get("/", async (req, res) => {
  res.status(200).json(await service.getAll());
});

app.get("/locales/interior", async (req, res) => {
  const result = await service.amba();
  res.json(result);
});

app.listen(port, async () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
  await DBinit();
});
