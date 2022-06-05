const axios = require("axios");
const { Op } = require('sequelize')
const { Genre, Platform: Platform, Videogame } = require("../db");
require('dotenv').config();
const { API_KEY } = process.env

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
const getGenres = async () => {
  const response = (await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data.results
    .map((g) => g.name)
    .map((e) => {
      return Genre.findOrCreate({
        where: { name: e },
      });
    });
  const allGenres = await Genre.findAll();

  return allGenres;
};

// platfoms from api to db
const getPlatforms = async () => {
  const response = (await axios(`https://api.rawg.io/api/platforms?key=${API_KEY}`)).data.results
  .map(platform => platform.name)
  .map(p => {
    return Platform.findOrCreate({
      where: { name: p },
    });
  });
  const allPlatforms = await Platform.findAll();

  return allPlatforms;
};


// /videogames/name
const getVideogameByNameFromDB = async (name) => {
  const videogame = await Videogame.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  return videogame;
};

module.exports = {
  getAllFromDB,
  videogameByIdDB,
  getGenres,
  getPlatforms,
  getVideogameByNameFromDB
};
