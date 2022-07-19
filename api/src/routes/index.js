const { Router } = require('express');

const getVideogamesById = require('./videogame.router')
const getVideogames = require('./videogames.router') 
const gamesGenre = require('./genres.router')
const gamesPlatforms = require('./platforms.router')
const router = Router();

router.use('/platforms', gamesPlatforms);
router.use('/genres', gamesGenre);
router.use('/videogames', getVideogames);
router.use('/videogame', getVideogamesById);

module.exports = router;


