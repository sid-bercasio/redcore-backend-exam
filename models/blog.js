'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Blogs.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    content: DataTypes.STRING,
    details: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    category: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Blogs',
  });
  return Blogs;
};