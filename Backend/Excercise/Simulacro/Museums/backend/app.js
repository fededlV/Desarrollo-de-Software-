import express from "express";
import cors from "cors";
import { Museum } from "./models/models.js";
import sequelize from "./data/db.js";
import service from "./services/service.js";
const port = 3001;

const app = express();
app.use(cors());
app.use(express.json());

const dbInit = async () => {
  try {
    await sequelize.sync({ force: true });
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
    console.log("Database initialized");
  } catch (error) {
    console.error("Error initializing database", error);
  }
};

app.get("/museos", service.getAll);

app.post("/museos", service.createMuseum);

app.delete("/museos/:id", service.deleteMuseum);

dbInit().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
