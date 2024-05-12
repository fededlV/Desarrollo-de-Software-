import { DataTypes } from "sequelize";
import sequelize from "../data/db.js";

export const Viajes = sequelize.define(
  "Viajes",
  {
    destino: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duracion: {
      type: DataTypes.INTEGER,
    },
    precio: {
      type: DataTypes.FLOAT,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
);
