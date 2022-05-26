const router = require("express").Router();
const { Genre, Videogame } = require("../db");
const { getAllFromAPI, getVideogameById, getVideogameByNameFromAPI } = require("../services/getFromAPI");
const { getAllFromDB, videogameByIdDB, getGenreFromAPIToDB, getVideogameByNameFromDB }= require("../services/getFromDB");

// me traigo todo lo que tenga en la API y en la DB
const getAll = async () => {
  const videogamesFromAPI = await getAllFromAPI();
  const videogamesFromBDD = await getAllFromDB();
  const allVideogames = videogamesFromAPI.concat(videogamesFromBDD);

  return allVideogames;
};

const getAllByName = async (name) => {

    const getFromAPI = await getVideogameByNameFromAPI(name)
    const getFromDB = await getVideogameByNameFromDB(name)
    const all = getFromAPI.concat(getFromDB)

    return all;
  };

// ruteo get para traer todo (API y DB) al cliente 
// si llega name por query que pase a la siguiente (que es la que trae por name)
const getVideogames = async (req, res, next) => {

  if (req.query.name) return next()

  try {
    const allVideogames = await getAll();
    console.log(allVideogames.length)
    return res.json(allVideogames)

  } catch (error) {
    next(error);
  }
};

// busca en endpoint los games por nombre
const getVideogamesByName = async (req, res, next) => {
  const { name } = req.query;

  try {
    res.json(await getAllByName(name))

  } catch (error) {
    next(error)
  }
}

// busca videogame por id
const getVideogamesById = async (req, res, next) => {
  const { id } = req.params
  const regex = /([a-zA-Z]+([0-9]+)+)/

  try {
    if (regex.test(id)) {
      const fromDB = await videogameByIdDB(id)
      return res.json(fromDB)
      
    } else  {
      const fromAPI = await getVideogameById(id)
      return res.json(fromAPI)
    } 

  } catch (error) {
    next(error)
  }
};

const gamesGenre = async (req, res, next) => {
  try {
    const prueba = await getGenreFromAPIToDB()
    return res.json(prueba)

  } catch (error) {
    next(error)
  }
};

const createVideogame = async (req, res, next) => {
  const { name, description, released, rating, platforms } = req.body;

  
  try {
    if (!name || !description || !released || !rating) res.status(404).send('Faltan propiedades obligatorias')

    const videogameCreated = await Videogame.findOrCreate({
      where: {
        name,
        description,
        released,
        rating,
        platforms,
      }
    });
    return res.status(201).json(videogameCreated)
  } catch (error) {
    next(error)
  }
};

const crear = async () => {
  const tabla = await Videogame.create({
    name: "Tomi",
    description: "esta es una prueba",
    platforms: ["todas"],
  });
  return tabla;
};

const crearOtro = async () => {
  const tabla = await Videogame.create({
    name: "OtroTomi",
    description: "esta es una prueba 2",
    platforms: ["solo PC"],
  });
  return tabla;
};
// const genre = async () => {
//   const tabla2 = await Genre.create({
//     name: ["Drama"],
//   })
//   return tabla2;
// }

// const otroGenre = async () => {
//   return Genre.create({
//     name: ["Acción", "Policial"]
//   })
// }

// const masGenre = async () => {
//   return Genre.create({
//     name: ["Romántica", "Psicológica"]
//   })
// }


module.exports = {
  getVideogames,
  getVideogamesByName,
  getVideogamesById,
  crear,
  crearOtro,
  gamesGenre,
  createVideogame,
  // genre,
  // otroGenre,
  // masGenre,
};
