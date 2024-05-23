import express, { Router } from "express";
import { Usuario } from "../models/usuarios.js";
import { Producto } from "../models/productos.js";
import { autorizar } from "../middlewares/autorizarJwt.js";

export const router = Router();
//Insertar un filtro para que solo las peticiones que contengan un JWT token valido se pueda procesar
router.use(autorizar);

router.get("/productos", async (req, res) => {
  const productos = await Producto.findAll();
  res.json(productos);
});

router.get("/usuarios", validarAdmin, async (req, res) => {
  /* const  */
});

async function validarAdmin(req, res, next) {
  //Valida que el usuario tenga perfil de administrador
}
