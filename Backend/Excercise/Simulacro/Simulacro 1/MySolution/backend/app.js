import express from "express";
import cors from "cors";
import sequelize from "./data/db.js";
import dotenv from "dotenv";
import service from "./services/services.js";

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

const DBinit = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Database initialized");
  } catch (error) {
    console.error("Error initializing database: ", error);
  }
};

app.get("/", service.getStores);

app.get("/locales", service.getStoresAR);

app.get("/locales/interior", service.getStoresInt);

app.get("/status", service.getStatus);

DBinit().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
