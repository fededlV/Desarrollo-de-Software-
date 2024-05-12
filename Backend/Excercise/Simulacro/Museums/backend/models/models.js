import { DataTypes } from "sequelize";
import sequelize from "../data/db.js";

export const Museum = sequelize.define(
  "Museum",
  {
    nombre: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
    exposiciones: DataTypes.STRING,
    horarios: DataTypes.STRING,
    precioEntrada: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  }
);
