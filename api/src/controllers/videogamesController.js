const router = require("express").Router();
const { Genre, Videogame } = require("../db");
const getFromAPI = require('../services/getFromAPI');
const getFromDB = require('../services/getFromDB');


const getAll = router.get('/', async (req, res) => {
  const videogamesFromAPI = await getFromAPI()
  const videogamesFromBDD = await getFromDB()

  const allVideogames = videogamesFromAPI.concat(videogamesFromBDD)

  res.json(allVideogames)
  console.log(videogamesFromBDD)
});

const crear = async () => {
  const algo = await Videogame.create({
    id: 1,
    name: 'Tomi',
    description: 'esta es una prueba',
    platforms: ["todas"]
  })
  return algo
}


module.exports = {
  getAll,
  crear
};