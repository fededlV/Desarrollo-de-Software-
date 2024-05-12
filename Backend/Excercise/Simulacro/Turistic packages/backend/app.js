import express from "express";
import cors from "cors";
import { Viajes } from "./models/models.js";
import db from "./data/db.js";
import service from "./services/services.js";

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

const DBinit = async () => {
  try {
    await db.sync({ force: true });
    await Viajes.bulkCreate([
      {
        destino: "Cancún, México",
        duracion: "7 días",
        precio: 1200,
        descripcion: "Disfruta de playas paradisíacas y ruinas mayas.",
      },
      {
        destino: "Machu Picchu, Perú",
        duracion: "5 días",
        precio: 850,
        descripcion: "Explora la ciudad perdida de los Incas en los Andes.",
      },
      {
        destino: "Roma, Italia",
        duracion: "10 días",
        precio: 1500,
        descripcion: "Descubre la historia y cultura de la antigua Roma.",
      },
      {
        destino: "París, Francia",
        duracion: "5 días",
        precio: 1300,
        descripcion: "Romance y cultura en la ciudad de la luz.",
      },
      {
        destino: "Tokio, Japón",
        duracion: "8 días",
        precio: 2100,
        descripcion: "Experimenta la mezcla de tradición y modernidad.",
      },
      {
        destino: "Nueva York, USA",
        duracion: "6 días",
        precio: 1700,
        descripcion: "La ciudad que nunca duerme.",
      },
      {
        destino: "Londres, Inglaterra",
        duracion: "7 días",
        precio: 1450,
        descripcion: "Historia y cultura en la capital británica.",
      },
      {
        destino: "Río de Janeiro, Brasil",
        duracion: "5 días",
        precio: 900,
        descripcion: "Playas, carnaval y el Cristo Redentor.",
      },
      {
        destino: "Buenos Aires, Argentina",
        duracion: "4 días",
        precio: 550,
        descripcion: "Tango, gastronomía y cultura porteña.",
      },
      {
        destino: "Madrid, España",
        duracion: "6 días",
        precio: 1100,
        descripcion: "Arte, historia y vida nocturna.",
      },
    ]);
    console.log("Database initialized");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};

app.get("/paquetes/consulta", service.getForDesc);

app.get("/paquetes", service.getAll);

app.get("/paquetes/:pais", service.getForCountry);

app.delete("/paquetes/:id", service.deleteForId);

app.post("/paquetes", service.newPackage);

DBinit().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
