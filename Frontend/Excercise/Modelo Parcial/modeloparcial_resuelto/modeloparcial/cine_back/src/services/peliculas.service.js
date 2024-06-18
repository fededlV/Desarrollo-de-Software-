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
    return resultado.map(p => {
        return {
            Id: p.dataValues.Id,
            Titulo: p.dataValues.Titulo,
            Director: p.dataValues.Director,
            Genero: p.dataValues.Genero,
            Duracion: p.dataValues.Duracion, 
            Eliminado: p.dataValues.Eliminado
        }
    })
}

const insertarPelicula = async (peliculaCmd) => {
    console.log(peliculaCmd)
    const resultado = await sequelize.models
    .Peliculas.create({
        Titulo: peliculaCmd.Titulo,
        Director: peliculaCmd.Director,
        Genero: peliculaCmd.Genero,
        Duracion: peliculaCmd.Duracion,
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
        where: { Id: peliculaCmd.Id, Eliminado: false },
    });
    if (!pelicula) {
        throw new ResourceNotFound("Película no encontrada");
    }

    const updatedPelicula = await sequelize.models.Peliculas.update(
        {
            Titulo: peliculaCmd.Titulo,
            Director: peliculaCmd.Director,
            Genero: peliculaCmd.Genero,
            Duracion: peliculaCmd.Duracion,
        },
        {
            where: { Id: peliculaCmd.Id }
        });
    console.log(updatedPelicula)
    return { Id: peliculaCmd.Id };

}


const eliminarPelicula = async (id) => {
    const pelicula = await sequelize.models.Peliculas.findOne({
        where: { Id: id, Eliminado: false },
    });
    if (!pelicula) {
        throw new ResourceNotFound("Película no encontrada");
    }

    const updatedPelicula = await sequelize.models.Peliculas.update(
        {
            Eliminado: true
        },
        {
            where: { Id: id}
        });
    
    return { updatedPelicula};
}

const peliculasService = {
    getPeliculas,
    insertarPelicula,
    editarPelicula, 
    eliminarPelicula
}

export default peliculasService;
