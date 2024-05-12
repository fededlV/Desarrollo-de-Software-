import { Viajes } from "../models/models.js";
import { Op } from "sequelize";

const getAll = async (req, res) => {
  const list = await Viajes.findAll();
  res.status(200).json(list);
};

const getForCountry = async (req, res) => {
  try {
    const pais = req.params.pais;
    const list = await Viajes.findAll({
      where: {
        destino: {
          [Op.like]: `%${pais}%`,
        },
      },
    });
    res.status(200).json(list);
  } catch (error) {
    console.error("Error in getForCountry:", error);
    res.status(500).json({ message: "Error getting package for country" });
  }
};

const getForDesc = async (req, res) => {
  try {
    const description = req.query.q;
    if (description) {
      const lst = await Viajes.findAll({
        where: {
          descripcion: {
            [Op.like]: `%${description}%`,
          },
        },
      });
      res.status(200).json(lst);
    } else {
      const lst = await Viajes.findAll();
      res.json(lst);
    }
  } catch (error) {
    console.error("Error in getForDescription:", error);
    res.status(500).json({ message: "Error getting package for description" });
  }
};

const deleteForId = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Viajes.findOne({ where: { id } });
    if (deleted) {
      await deleted.destroy();
      res.status(204).json("Deleting package of this id");
    } else {
      res.status(404).json({ message: "Package not found" });
    }
  } catch (error) {
    console.error("Error in deletedForId:", error);
    res.status(500).json({ message: "Error deleting package for id" });
  }
};

const newPackage = async (req, res) => {
  try {
    const newPackage = req.body;
    const created = await Viajes.create(newPackage);
    if (created) {
      res.status(201).json(created);
    } else {
      res.status(400).json({ message: "Error creating package" });
    }
  } catch (err) {
    console.error("Error in newPackage:", err);
    res.status(500).json({ message: "Error creating package" });
  }
};

export default { getAll, getForCountry, getForDesc, deleteForId, newPackage };
