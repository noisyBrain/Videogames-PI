const { Genre, Videogame } = require("../db");
const { getAllFromAPI, getVideogameById, getVideogameByNameFromAPI } = require("../services/getFromAPI");
const { getAllFromDB, videogameByIdDB, getGenres, getVideogameByNameFromDB, getPlatforms }= require("../services/getFromDB");

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
    const all = getFromDB.concat(getFromAPI)

    return all;
  };

const getVideogames = async (req, res, next) => {

  if (req.query.name) return next()

  try {
    const allVideogames = await getAll();
    return res.json(allVideogames)

  } catch (error) {
    next(error);
  }
};

const getVideogamesByName = async (req, res, next) => {
  const { name } = req.query;

  try {
    res.json(await getAllByName(name))

  } catch (error) {
    next(error)
  }
}

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
    const genresFromDB = await getGenres()
    return res.json(genresFromDB)

  } catch (error) {
    next(error)
  }
};

const gamesPlatforms = async (req, res, next) => {
  try {
    const platformsFromDB = await getPlatforms()
    return res.json(platformsFromDB)

  } catch (error) {
    next(error)
  }
}

const createVideogame = async (req, res, next) => {
  const { name, description, released, rating, platforms, genres, createdBy, background_image } = req.body;

  
  try {
    if (!name || !description || !released || !rating || !background_image) res.status(404).send('Faltan propiedades obligatorias')

    const videogameCreated = await Videogame.create({
        createdBy,
        description,
        background_image,
        name,
        platforms,
        rating,
        released,
    });

    const genresInDB = await Genre.findAll({
      where: {
        name: genres
      }
    });
    videogameCreated.addGenre(genresInDB)

    return res.status(201).json(videogameCreated)
  } catch(error) {
    next(error)
  }

};




module.exports = {
  getVideogames,
  getVideogamesByName,
  getVideogamesById,
  gamesGenre,
  gamesPlatforms,
  createVideogame,
};
