require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

// GET /videogames
const getAllFromAPI = async () => {
  let videogamesFromAPI = [];

  for (let i = 2; i <= 6; i++) {

    videogamesFromAPI.push(axios(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`))
    // console.log("videogamesFromAPI en el for -> ", videogamesFromAPI)
  //   response = (await axios(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)).data.results
  //   videogamesFromAPI.push(response.map((ele) => ({
  //     id: ele.id,
  //     background_image: ele.background_image,
  //     name: ele.name,
  //     genres: ele.genres?.map((g) => g.name),
  //     rating: ele.rating,
  //     platforms: ele.platforms?.map(p => p.platform.name)
  //     }))
  //   );
  //   videogamesFromAPI = videogamesFromAPI.flat();
  // }
  // console.log("videogamesFromAPI A VER QUE PASA -> ", videogamesFromAPI)
  // return videogamesFromAPI;
  };
  videogamesFromAPI = (await Promise.all(videogamesFromAPI)).map(ele => {
    return ele.data.results.map(ele => ({
      id: ele.id,
      background_image: ele.background_image,
      name: ele.name,
      genres: ele.genres?.map((g) => g.name),
      rating: ele.rating,
      platforms: ele.platforms?.map(p => p.platform.name)
    }))
  })

  return videogamesFromAPI.flat();
}

// GET /videogames?name=...
const getVideogameByNameFromAPI = async (name) => {
  const response = (await axios(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}&page_size=15`)).data.results;

  const videogames = response.map(e => ({
    id: e.id,
    background_image: e.background_image,
    name: e.name,
    genres: e.genres?.map(g => g.name),
    released: e.released,
    rating: e.rating,
    platforms: e.platforms?.map(p => p.platform.name),
  }));
  return videogames; 
};


// GET /videogames/:id
const getVideogameById = async (id) => {
  const response = (await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data;
  const {
    background_image,
    name,
    genres,
    description,
    released,
    rating,
    parent_platforms,
  } = response;

  const videogame = {
    background_image,
    name,
    description,
    released,
    rating,
    genres: genres?.map((g) => g.name),
    platforms: parent_platforms?.map((p) => p.platform.name),
  };

  return videogame;
};



module.exports = {
  getAllFromAPI,
  getVideogameById,
  getVideogameByNameFromAPI,
};
