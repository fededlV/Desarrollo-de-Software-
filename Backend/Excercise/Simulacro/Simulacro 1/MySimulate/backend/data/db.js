const { Sequelize } = require("sequelize");
const { Stores } = require("../models/models.js");
const fs = require("fs");

const localsData = fs.readFileSync("./data/STARBUCKS_DIRECTORY.json", "utf-8");
const locals = JSON.parse(localsData);
const DBinit = async () => {
  try {
    await sequelize.sync({ force: true });
    await Stores.bulkCreate(locals);
    console.log("Data base create and sincronized successfully");
  } catch (error) {
    console.error("Error sincronizing data base", error);
  }
};

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./data/bd.sqlite",
});

module.exports = { sequelize, DBinit };
