import express from "express";
import { Producto } from "../models/productos.js";
const router = express.Router();
router.get("/productos/:id", async (req, res) => {
  try {
    const idProd = req.params.id;
    const producto = await Producto.findOne({
      where: {
        id: idProd,
      },
    });
    if (!producto) {
      res.status(404).send({ mensaje: "Producto no encontrado" });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).send({ mensaje: "Error interno" });
  }
});

export default router;
