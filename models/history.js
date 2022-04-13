'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  History.init({
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    arrive: DataTypes.TIME,
    leave: DataTypes.TIME,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};