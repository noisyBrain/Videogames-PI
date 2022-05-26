const axios = require("axios");
const { API_KEY, Genre, Videogame } = require("../db");

// para /videogames -> trae todo
const getAllFromDB = async () => {
  const videogameFromDB = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      trought: {
        attributes: [],
      },
    },
  });

  return videogameFromDB;
};

// /videogame/:id
const videogameByIdDB = async (id) => {
  const videogameFromDB = await Videogame.findByPk(id);
  return videogameFromDB;
};

// genres from api to db
const getGenreFromAPIToDB = async () => {
  const response = (await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data.results
    .map((g) => g.name)
    .map((e) => {
      Genre.findOrCreate({
        where: { name: e },
      });
    });
  const allGenres = await Genre.findAll();

  return allGenres;
};

// /videogames/name
const getVideogameByNameFromDB = async (name) => {
  const videogame = await Videogame.findAll({
    where: { name }
  });
  return videogame;
};

module.exports = {
  getAllFromDB,
  videogameByIdDB,
  getGenreFromAPIToDB,
  getVideogameByNameFromDB
};
