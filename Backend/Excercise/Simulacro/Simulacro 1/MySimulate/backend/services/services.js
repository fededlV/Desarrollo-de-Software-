const { StarbucksDirectory } = require("../models/models.js");
const { Op } = require("sequelize");

const getAll = async () => {
  const result = await StarbucksDirectory.findAll();
  return result;
};

const theyAreAR = async () => {
  const result = await StarbucksDirectory.findAll({
    where: {
      country: "AR",
    },
  });
  return result;
};

const amba = async () => {
  const result = await StarbucksDirectory.findAll({
    where: {
      country: "AR",
      province: {
        [Op.not]: "C",
        [Op.not]: "B",
      },
    },
  });
  return result;
};

module.exports = { theyAreAR, amba, getAll };
