require('dotenv').config();
const axios = require("axios");
const { API_KEY } = process.env

// GET /videogames
const getAllFromAPI = async () => {
  const response = (await axios(`https://api.rawg.io/api/games?key=${API_KEY}`)).data.results

  const videogamesFromAPI = response.map((ele) => ({
    id: ele.id,
    background_image: ele.background_image,
    name: ele.name,
    genre: ele.genres.map((g) => g.name),
  }));

  return videogamesFromAPI
}

// GET /videogames/:id
const getVideogameById = async (id) => {
  const response = (await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data
  const { background_image, name, genres, description, released, rating, parent_platforms } = response

  const videogame = {
    background_image,
    name,
    description,
    released,
    rating,
    genre: genres.map(g => g.name),
    platforms: parent_platforms.map(p => p.platform.name)   
  };

  return videogame;
};

const getVideogameByNameFromAPI = async (name) => {
  const response = (await axios(`https://api.rawg.io/api/games?search=${game}&key=${API_KEY}`)).data.results
  const videogames = response.map(e => e.name)
  return videogames // acá voy a tener 20 videojuegos. Buscar la forma de limitarlo a que me lleguen 15
}


module.exports = {
  getAllFromAPI,
  getVideogameById,
  getVideogameByNameFromAPI,
}
