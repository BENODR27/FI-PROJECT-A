'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       Country.hasMany(models.State, { foreignKey: 'countryId' });
    }
  }
  Country.init({
    countryName:  {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
       
        // notEmpty: { msg: "countryName cannot be empty" },
        len: { 
          args: [2, 50], 
          msg: "Last name must be between 2 and 50 characters" 
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Country',
  });
  return Country;
};