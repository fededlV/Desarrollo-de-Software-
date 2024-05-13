import { Op } from "sequelize";
import { Starbucks } from "../models/models.js";

const getStores = async (req, res) => {
  const stores = await Starbucks.findAll();
  res.status(200).json(stores);
};

const getStoresAR = async (req, res) => {
  const stores = await Starbucks.findAll({
    where: {
      country: "AR",
    },
  });
  if (stores === undefined || stores.length == 0) {
    res.status(404).send("No stores found");
    return;
  }
  res.status(200).json(stores);
};

const getStoresInt = async (req, res) => {
  try {
    const stores = await Starbucks.findAll({
      where: {
        country: "AR",
        province: {
          [Op.notIn]: ["B", "C"],
        },
      },
    });
    if (stores === undefined || stores.length == 0) {
      res.status(404).send("No stores found");
      return;
    }
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).send("Internal error");
  }
};

const getStatus = async (req, res) => {
  res.status(200).json({ respuesta: "API en línea" });
};

export default { getStores, getStoresAR, getStoresInt, getStatus };
