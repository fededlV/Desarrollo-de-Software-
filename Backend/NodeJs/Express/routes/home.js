const { Router } = require("express");
const router = Router();
/* function HomeRoutes(app) {
  app.get("/about", (req, res) => {
    res.send("About");
  });

  app.get("/dashboard", (req, res) => {
    res.send("Dashboard");
  });
}

module.exports = HomeRoutes; 
Forma mas inusual para exportar rutas para utilizarlos dentro de otro servidor.*/

router.get("/about", (req, res) => {
  const title =
    "Mi pagina creada desde Express 2"; /* Esto lo estoy usando en Template engine */

  res.render("index", { title });
});

router.get("/dashboard", (req, res) => {
  res.send("Dashboard");
});

module.exports = router;
