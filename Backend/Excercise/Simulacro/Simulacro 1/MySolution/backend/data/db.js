import { Sequelize } from "sequelize";
import dotenv from "dotenv";
/* import { readFile } from "fs/promises";
import { DataTypes } from "sequelize";

const readJson = (file) => {
  return readFile(file, "utf-8").then((data) => JSON.parse(data));
};
const dataJson = readJson("starbucks.json"); */

/* dotenv.config(); */

const logHabilitado = process.env.LOG;

const sequelize = new Sequelize({
  dialect: "sqlite",
  logging: logHabilitado === "true" ? console.log : false,
  storage: "./data/bd.sqlite",
});

export default sequelize;
