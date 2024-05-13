import { Museum } from "../models/models.js";
import { Op } from "sequelize";

const getAll = async (req, res) => {
  const museums = await Museum.findAll();
  if (museums.length === 0) {
    res.status(404).json({ message: "No museums found" });
  }
  res.json(museums);
};

const createMuseum = async (req, res) => {
  const newMuseum = req.body;
  const newMus = await Museum.create(newMuseum);
  if (newMus) {
    res.status(200).json(newMus);
  } else {
    res.status(404).json({ message: "Museum cannot update" });
  }
};

const deleteMuseum = async (req, res) => {
  const id = req.params.id;
  const deleted = await Museum.destroy({ where: { id: id } });
  if (deleted) {
    res.status(201).json({ message: "Museum deleted" });
  } else {
    res.status(404).json({ message: "Museum cannot delete" });
  }
};

export default { getAll, createMuseum, deleteMuseum };
