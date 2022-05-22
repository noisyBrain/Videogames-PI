const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('genre', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    }
  });
}