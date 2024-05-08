import db from "./data/db.js";
import reserva from "./models/reservas.js";
import service from "./services/reservasSVC.js";
import express from "express";
import cors from "cors";
const port = 3000;

const app = express();

async function DBinit() {
  await db.sync({ force: true });
  await reserva.bulkCreate([
    {
      fechaReserva: "2024-05-07 13:00",
      jugador: "Carlos Calvo",
      numeroCancha: 1,
    },
    {
      fechaReserva: "2024-05-07 14:00",
      jugador: "Carlos Calvo1",
      numeroCancha: 2,
    },
    {
      fechaReserva: "2024-06-07 15:00",
      jugador: "",
      numeroCancha: 11,
    },
    {
      fechaReserva: "2024-07-07 16:00",
      jugador: "Federico De la Vega",
      numeroCancha: 3,
    },
    {
      fechaReserva: "2024-08-07 17:00",
      jugador: "Federico De la Vega2",
      numeroCancha: 4,
    },
    {
      fechaReserva: "2024-10-10",
      jugador: "",
      numeroCancha: 5,
    },
  ]);
}

app.use(cors());
app.use(express.json());

app.get("/reservas", async (req, res) => {
  if (req.query.jugador != undefined && req.query.jugador !== "") {
    res.json(await service.getAllByJugador(req.query.jugador));
  } else {
    res.json(await service.getAll());
  }
});

DBinit().then(
  app.listen(port, async () => {
    console.log(`Server is running on ${port}`);
  })
);

/* app.get("/reservas/:jugador", async (req, res) => {
  if (req.query.jugador != undefined && req.query.jugador !== "") {
    res.json(await getAllByJugador(req.query.jugador));
  }
}); */
