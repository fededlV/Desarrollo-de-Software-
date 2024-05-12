import { Museum } from "../models/models.js";
import { Op } from "sequelize";

const chargeMuseums = async (req, res) => {
  try {
    const museums = await Museum.findAll();
    res.json(museums);
  } catch (error) {
    res.status(500).json({ message: "Error al cargar los museos" });
  }
};

const newMuseum = async (req, res) => {
  try {
    const newMuseum = req.body;
    res.json(await Museum.create(newMuseum));
  } catch (error) {
    res.status(500).json({ message: "Error al cargar el nuevo museo" });
  }
};

const deleteMuseum = async (req, res) => {
  try {
    const museumId = req.query.q;
    const deleted = await Museum.findOne({
      where: {
        nombre: {
          [Op.startsWith]: `${museumId}`,
        },
      },
    });
    if (deleted) {
      await deleted.destroy();
      res.status(204).json("Museo eliminado con ese id");
    } else {
      res.status(404).json({ error: "Museo no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el museo" });
  }
};

const getByName = async (req, res) => {
  try {
    const museumName = req.query.q;
    const museum = await Museum.findAll({
      where: { nombre: museumName },
    });
    if (museum) {
      res.status(201).json(museum);
    } else {
      res.status(404).json({ erorr: "Museo no encontrado " });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al buscar el museo " });
  }
};

export default { deleteMuseum, newMuseum, chargeMuseums, getByName };
