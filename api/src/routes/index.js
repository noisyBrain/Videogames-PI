const { Router } = require('express');

const getVideogamesById = require('./videogame.router')
const getVideogames = require('./videogames.router') 
const gamesGenre = require('./genres.router')
const router = Router();

// para /videogames recordar eliminar la funcion crear() que está de prueba. Está en el index del root exportada en el module exports. Cuando la elimine, va a quedar getAll sola, por lo tanto recordar sacarle los curly brackets
router.use('/genres', gamesGenre)
router.use('/videogames', getVideogames); // me voy a traer  todo lo que venga desde la api y desde la db
router.use('/videogame', getVideogamesById)

module.exports = router;


