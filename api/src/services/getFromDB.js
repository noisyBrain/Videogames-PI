const { Genre, Videogame } = require('../db');

module.exports = getFromBDD = async () => {
  const videogameFromBDD = await Videogame.findAll({
    include: Genre,
  });
  return videogameFromBDD;
};