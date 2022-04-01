'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AppointmentType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AppointmentType.belongsToMany(models.Appointment, {foreignKey: 'appointmentId', as: 'appointment'})
    }
  }
  AppointmentType.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AppointmentType',
  });
  return AppointmentType;
};