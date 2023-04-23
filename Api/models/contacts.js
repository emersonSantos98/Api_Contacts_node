'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  Contacts.init({
    name: DataTypes.STRING,
    company: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    titulo: DataTypes.STRING,
    photo: DataTypes.STRING,
    groupId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Contacts',
  });
  return Contacts;
};
