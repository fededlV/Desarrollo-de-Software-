import { DataTypes } from "sequelize";
import sequelize from "../data/db.js";

export const Museum = sequelize.define(
  "Museum",
  {
    /* id: {
      primaryKey: true,
      autoIncrement: true,
    }, */
    nombre: {
      type: DataTypes.STRING,
    },
    ubicacion: {
      type: DataTypes.STRING,
    },
    exposiciones: {
      type: DataTypes.STRING,
    },
    horarios: {
      type: DataTypes.STRING,
    },
    precioEntrada: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);
