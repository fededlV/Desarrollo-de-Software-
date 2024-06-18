import { ResourceNotFound } from 
"../errors/resource-not-found-error.js"
import sequelize from "../models/database.js"
import { Op } from "sequelize"

const getPeliculas = async (filters) => {
    const whereQuery = {}
    if(filters){
        if(filters.titulo){
            whereQuery.titulo = { [Op.like]: `%${filters.titulo}%`}  
        }
    }


    const resultado = await sequelize.models.Peliculas.findAll({
        where: whereQuery,
        attributes: [
            'Id',
            'Titulo',
            'Director',
            'Genero',
            'Duracion',
            'Eliminado',
        ],
        order: [['Titulo', 'ASC']]
    })
    console.log('resultado', resultado)
    return resultado.map(p => {
        return {
            id: p.dataValues.Id,
            titulo: p.dataValues.Titulo,
            director: p.dataValues.Director,
            genero: p.dataValues.Genero,
            duracion: p.dataValues.Duracion
        }
    })
}

const insertarPelicula = async (peliculaCmd) => {

    console.log(peliculaCmd)
    const resultado = await sequelize.models
    .Peliculas.create({
        Titulo: peliculaCmd.titulo,
        Director: peliculaCmd.director,
        Genero: peliculaCmd.genero,
        Duracion: peliculaCmd.duracion,
        Eliminado: false,
    })
    return {
        id: resultado.dataValues.Id,
        titulo: resultado.dataValues.Titulo,
    };
}

// ====================PUT====================
const editarPelicula = async (peliculaCmd) => {
    const pelicula = await sequelize.models.Peliculas.findOne({
        where: { Id: peliculaCmd.id, Eliminado: false },
    });
    if (!pelicula) {
        throw new ResourceNotFound("Película no encontrada");
    }

    const updatedPelicula = await sequelize.models.Peliculas.update(
        {
            Titulo: peliculaCmd.titulo,
            Director: peliculaCmd.director,
            Genero: peliculaCmd.genero,
            Duracion: peliculaCmd.duracion,
        },
        {
            where: { Id: peliculaCmd.id }
        });
    console.log(updatedPelicula)
    return { id: peliculaCmd.id };

}

const peliculasService = {
    getPeliculas,
    insertarPelicula,
    editarPelicula
}

export default peliculasService;
