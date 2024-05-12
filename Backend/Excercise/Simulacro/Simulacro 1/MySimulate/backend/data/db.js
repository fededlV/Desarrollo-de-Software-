import { Sequelize } from "sequelize";
import fs from "fs";

const localsData = fs.readFileSync("./data/STARBUCKS_DIRECTORY.json", "utf-8");
export const locals = JSON.parse(localsData);

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./data/bd.sqlite",
});

export default { sequelize, locals };
