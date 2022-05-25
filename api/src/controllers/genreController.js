const router = require("express").Router();
const axios = require("axios");
const { API_KEY } = require("../db");
const { Genre, Videogame } = require("../db");
const { getAllFromAPI, getVideogameById } = require("../services/getFromAPI");
const { getAllFromDB, videogameByIdDB }= require("../services/getFromDB");

// const getVideogameByGenre = router.get('/', async (req, res) => {
//   const genreFromDB = await findAll()
  
// })

module.exports = {
  // getVideogameByGenre,
}