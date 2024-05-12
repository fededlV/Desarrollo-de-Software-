import { DataTypes } from "sequelize";
import sequelize from "../data/db.js";

const Reservas = sequelize.define("Reserva", {
  idReserva: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  fechaReserva: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  jugador: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  numeroCancha: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Reservas;
