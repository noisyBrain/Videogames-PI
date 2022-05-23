const axios = require("axios");
const { API_KEY } = require("../db");

module.exports = getFromAPI = async () => {
  const response = (await axios(`https://api.rawg.io/api/games?key=${API_KEY}`)).data.results

  const videogamesFromAPI = response.map((ele) => ({
    img: ele.background_image,
    name: ele.name,
    genre: ele.genres.map((g) => g.name),
  }));

  return videogamesFromAPI
};
