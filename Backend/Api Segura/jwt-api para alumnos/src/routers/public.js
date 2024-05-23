import express, { Router } from "express";
import { Usuario } from "../models/usuarios.js";
import { tokenSign } from "../utils/jwt.js";

export const router = Router();

router.get("/", (_, res) => {
  res.json({ mensaje: "API REST Segura" });
});

router.post("/login", async (req, res) => {
  //1. Validar usuario y pass
  //1.1 Si existe firmar el objeto y devolver
  //1.2 Retornar usuario inexistente.
  const data = req.body;
  let usuario = await Usuario.findOne({
    where: {
      email: data.email,
      clave: data.clave,
    },
  });
  if (!usuario) {
    res.status(404).send({ message: "Usuario o clave incorrecta" });
  }
  const token = await tokenSign(usuario.email, usuario.rol);
  res.json(token);
  //console.log(token);
});
