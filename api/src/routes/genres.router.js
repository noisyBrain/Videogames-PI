const { gamesGenre } = require('../controllers/videogamesController')
const router = require('express').Router()

router.get('/', gamesGenre)

module.exports = router
