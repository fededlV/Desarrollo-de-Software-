import express from "express";
import peliculasService from "./src/services/peliculas.service.js";
import { ResourceNotFound } from "./src/errors/resource-not-found-error.js";
import { ValidationError } from "sequelize";
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())

app.get("/api/peliculas", async (req, res) =>{
    // codigo
    const peliculas = await peliculasService.getPeliculas(req.query);
    console.log(peliculas)
    // retorno respueta
    res.json(peliculas);
})

app.post('/api/peliculas', async (req, res) =>{
    try{
        const pelicula = await peliculasService
        .insertarPelicula(req.body)
        return res.json(pelicula);
    }catch(err){
        console.log(err)
        res.status(500).send({error: 'Error interno. Intente nuevamente.'})
    }
  
});

app.put("/api/peliculas", async (req, res)=>{
    try {
        const pelicula = await peliculasService
        .editarPelicula(req.body)
        return res.json(pelicula);
    }catch(err){

        console.log(err)
        if (err instanceof ResourceNotFound)
            return res.status(err.status)
            .json({error: err.message})
        if (err instanceof ValidationError){
            return res.status(400)
            .json({error: err.message})
        }
        return res.status(500)
            .json({error: 'Error imprevisto. Intente nuevamente'}) 
    }
})


app.delete("/api/peliculas/:id", async (req, res)=>{
    console.log(req.params.id)
    try {
       
        const pelicula = await peliculasService
        .eliminarPelicula(req.params.id)
        return res.json(pelicula);
    }catch(err){
        console.log(err)
        if (err instanceof ResourceNotFound)
            return res.status(err.status)
            .json({error: err.message})
        if (err instanceof ValidationError){
            return res.status(400)
            .json({error: err.message})
        }
        return res.status(500)
            .json({error: 'Error imprevisto. Intente nuevamente'}) 
    }
})


app.listen(3001, ()=>{
    console.log("Servidor iniciado en el puerto 3001");
});
