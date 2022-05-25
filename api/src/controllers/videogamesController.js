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

/*router.get("/",*/ 
// ruteo get para traer todo (API y DB) al cliente 
const getVideogames = async (req, res, next) => {

  if (req.query.name) next()

  try {
    const allVideogames = await getAll();

    videogameByName.length ? // revisar que tengo que traerme 15 coincidencias. Ver cómo hacer
    res.json(videogameByName) :
    res.status(404).send('Videogame not found... :(')
    return res.json(allVideogames)

  } catch (error) {
    next(error);
  }
};

// en la siguiente función tengo que buscar 
const getVideogamesByName = async (req, res, next) => {
  const { name } = req.query;

  try {
    const videogameByName = allVideogames.filter((videogame) => // esto lo tengo que borrar y tengo que llamar a todo lo que me traiga desde la api y la base de datos con las cinco llamadas de una para lograr traerme los 100 videojuegos
    videogame.name.toLowerCase().includes(name.toLowerCase())
    );

  } catch (error) {
    next(error)
  }
}

/*router.get('/:id',*/
// me traigo sólo lo que coincida con el id
const getVideogamesById = async (req, res, next) => {
  const { id } = req.params

  try {
    const regex = /([a-zA-Z]+([0-9]+[a-zA-Z]+)+)/
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
  const { name, description, released, rating } = req.body;

  try {
    const videogameCreated = await Videogame.findOrCreate({
      where: {
        name,
        description,
        released,
        rating,
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
  getVideogamesById,
  crear,
  gamesGenre,
  createVideogame,
  // genre,
  // otroGenre,
  // masGenre,
};
