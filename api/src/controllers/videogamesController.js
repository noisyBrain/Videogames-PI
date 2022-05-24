const router = require("express").Router();
const axios = require("axios");
const { API_KEY } = require("../db");
const { Genre, Videogame } = require("../db");
const { getAllFromAPI, getVideogameById } = require("../services/getFromAPI");
const { getAllFromDB, videogameByIdDB }= require("../services/getFromDB");

// me traigo todo lo que tenga en la API y en la DB
const getAll = async () => {
  const videogamesFromAPI = await getAllFromAPI();
  const videogamesFromBDD = await getAllFromDB();
  const allVideogames = videogamesFromAPI.concat(videogamesFromBDD);

  return allVideogames;
};

// ruteo get para traer todo (API y DB) al cliente 
const getVideogames = router.get("/", async (req, res, next) => {
  const { name } = req.query;

  try {
    const allVideogames = await getAll();

    if (name) {
      const videogameByName = allVideogames.filter((videogame) =>
        videogame.name.toLowerCase().includes(name.toLowerCase())
      );

      videogameByName.length ? // revisar que tengo que traerme 15 coincidencias. Ver cómo hacer
      res.json(videogameByName) :
      res.status(404).send('Videogame not found... :(')
    }

    res.json(allVideogames)
  } catch (error) {
    next(error);
  }
});

// me traigo sólo lo que coincida con el id
const getVideogamesById = router.get('/:id', async (req, res, next) => {
  const { id } = req.params

  try {
    const regex = /([a-zA-Z]+([0-9]+[a-zA-Z]+)+)/
    if (regex.test(id)) {
      const fromDB = await videogameByIdDB(id)
      return res.json(fromDB)
      
    } else  {
      const fromAPI = await getVideogameById(id)
      console.log(fromAPI)
      return res.json(fromAPI)
    } 

  } catch (error) {
    next(error)
  }
});

const crear = async () => {
  const algo = await Videogame.create({
    name: "Tomi",
    description: "esta es una prueba",
    platforms: ["todas"],
  });
  return algo;
};


module.exports = {
  getVideogames,
  getVideogamesById,
  crear,
};
