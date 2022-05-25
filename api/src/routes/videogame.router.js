const getVideogamesById = require('../controllers/videogamesController');
const router = require("express").Router();

router.get('/:id', getVideogamesById)

module.exports = router