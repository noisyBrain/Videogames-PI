const { Genre, Videogame } = require('../db');

const getAllFromDB = async () => {
const videogameFromDB = await Videogame.findAll({
  include: {
    model: Genre,
    attributes: ['name'],
    trought: {
      attributes: []
    }
  }})

  return videogameFromDB;
}

const videogameByIdDB = async (id) => {
  const videogameFromDB = await Videogame.findByPk(id)
  return videogameFromDB;
}

module.exports = {
  getAllFromDB,
  videogameByIdDB
}