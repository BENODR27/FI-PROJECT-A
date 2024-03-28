'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Zone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Zone.belongsTo(models.State, { foreignKey: 'stateId' });
    }
  }
  Zone.init({
    zoneName: DataTypes.STRING,
    stateId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Zone',
  });
  return Zone;
};