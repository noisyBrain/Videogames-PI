const { getVideogamesById, createVideogame } = require('../controllers/videogamesController');
const router = require("express").Router();

router.get('/:id', getVideogamesById)
router.post('/', createVideogame)

module.exports = router