const axios = require("axios");
const { API_KEY } = require("../db");

// GET /videogames
const getAllFromAPI = async () => {
  const response = (await axios(`https://api.rawg.io/api/games?key=${API_KEY}`)).data.results

  const videogamesFromAPI = response.map((ele) => ({
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
    genre: genres.map(g => g.name),
    description,
    released,
    rating,
    platforms: parent_platforms.map(p => p.platform.name)   
  };

  return videogame;
}

module.exports = {
  getAllFromAPI,
  getVideogameById,
}
