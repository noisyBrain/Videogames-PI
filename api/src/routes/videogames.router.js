const { getVideogames, getVideogamesByName } = require("../controllers/videogamesController");

const router = require("express").Router();

router.get('/', getVideogames)
router.get('/', getVideogamesByName)

module.exports = router