import express from "express";
import cors from "cors";
import db from "./data/db.js";
import { Museum } from "./models/models.js";
import sequelize from "./data/db.js";
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

// Inicializar base de datos y cargar datos
async function DBinit() {
  await db.sync({ force: true });
  await Museum.bulkCreate([
    {
      nombre: "Museo del Prado",
      ubicacion: "Madrid, España",
      exposiciones: "Clásicos del Renacimiento",
      horarios: "09:00 - 18:00",
      precioEntrada: "15€",
    },
    {
      nombre: "Louvre",
      ubicacion: "París, Francia",
      exposiciones: "Arte y Cultura Egipcia",
      horarios: "09:00 - 20:00",
      precioEntrada: "17€",
    },
    {
      nombre: "Museo de Arte Moderno de Buenos Aires",
      ubicacion: "Buenos Aires, Argentina",
      exposiciones: "Arte Contemporáneo Latinoamericano",
      horarios: "10:00 - 19:00",
      precioEntrada: "500 ARS",
    },
    {
      nombre: "Museo Nacional de Bellas Artes",
      ubicacion: "Buenos Aires, Argentina",
      exposiciones: "Arte Europeo y Argentino",
      horarios: "11:00 - 20:00",
      precioEntrada: "Gratis",
    },
    {
      nombre: "MALBA",
      ubicacion: "Buenos Aires, Argentina",
      exposiciones: "Frida Kahlo y Diego Rivera",
      horarios: "12:00 - 20:00",
      precioEntrada: "630 ARS",
    },
    {
      nombre: "Museo de Arte Tigre",
      ubicacion: "Tigre, Buenos Aires, Argentina",
      exposiciones: "Arte Argentino del Siglo XIX",
      horarios: "10:00 - 18:00",
      precioEntrada: "240 ARS",
    },
    {
      nombre: "Smithsonian",
      ubicacion: "Washington D.C., USA",
      exposiciones: "Historia Natural",
      horarios: "10:00 - 17:30",
      precioEntrada: "Gratis",
    },
    {
      nombre: "Museo Egipcio de Turín",
      ubicacion: "Turín, Italia",
      exposiciones: "Artefactos del Antiguo Egipto",
      horarios: "09:00 - 19:00",
      precioEntrada: "15€",
    },
    {
      nombre: "Museo Van Gogh",
      ubicacion: "Ámsterdam, Países Bajos",
      exposiciones: "Obra de Vincent van Gogh",
      horarios: "09:00 - 18:00",
      precioEntrada: "19€",
    },
    {
      nombre: "Museo Guggenheim",
      ubicacion: "Bilbao, España",
      exposiciones: "Arte Moderno y Contemporáneo",
      horarios: "10:00 - 20:00",
      precioEntrada: "13€",
    },
  ]);
}

app.get("/museum", async (req, res) => {
  res.status(200).json(await Museum.findAll());
});

app.post("/museum", async (req, res) => {
  const newMuseum = req.body;
  const museum = await Museum.create(newMuseum);
  res.json(museum);
});

/* app.post("/museum", async (req, res) => {
  const { nombre, ubicacion, exposiciones, horarios, precioEntrada } = req.body;
  const data = await Museum.create(req.body);
  const sqlite = `INSERT INTO Museums (nombre, ubicacion, exposiciones, horarios, precioEntrada) VALUES ('${nombre}', '${ubicacion}', '${exposiciones}', '${horarios}', '${precioEntrada}')`;
  db.query(sqlite, (err, res) => {
    if (err) {
      res.status(500).send("Error al insertar datos en la base de datos");
      throw err;
    }
    res.status(201).json(data);
  });
}); */

app.delete("/museum/:id", async (req, res) => {
  const museoId = req.params.id;
  const deleted = await Museum.findOne({ where: { id: museoId } });
  if (!deleted) {
    res.status(404).json({ error: "Museo no encontrado" });
  } else {
    await deleted.destroy();
  }
  res.json(deleted);
});

DBinit().then(
  app.listen(port, async () => {
    console.log(`Server running on http://localhost:${port}`);
  })
);
