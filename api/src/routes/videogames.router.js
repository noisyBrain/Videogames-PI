const { getVideogames, createVideogame } = require("../controllers/videogamesController");

const router = require("express").Router();

router.get('/', getVideogames)
router.post('/', createVideogame)

module.exports = router