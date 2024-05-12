import Reservas from "../models/reservas.js";
import { Op } from "sequelize";

async function getAll() {
  return await Reservas.findAll({
    order: [
      ["fechaReserva", "ASC"],
      ["numeroCancha", "ASC"],
    ],
  });
}

async function getAllByJugador(nombreJugador) {
  return await Reservas.findAll({
    where: {
      jugador: { [Op.startsWith]: nombreJugador },
    },
    order: [
      ["fechaReserva", "ASC"],
      ["jugador", "ASC"],
    ],
  });
}

export default { getAll, getAllByJugador };
