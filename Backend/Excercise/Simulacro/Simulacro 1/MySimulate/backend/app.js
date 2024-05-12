import express from "express";
import cors from "cors";
import { Stores } from "./models/models.js";
import { sequelize, locals } from "./data/db.js";
import service from "./services/services.js";
const port = 3002;

const app = express();
app.use(cors());
app.use(express.json());

const DBinit = async () => {
  try {
    await sequelize.sync({ force: true });
    await Stores.bulkCrete(locals);
    console.log("Database initialized");
  } catch (error) {
    console.error("Error initializing database: ", error);
  }
};

DBinit().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
