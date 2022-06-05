const { gamesPlatforms } = require('../controllers/videogamesController')
const router = require('express').Router()

router.get('/', gamesPlatforms)

module.exports = router