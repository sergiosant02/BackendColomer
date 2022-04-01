'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Appointent.belongsTo(models.User, {foreignKey: 'userId', as: 'client'}),
      Appointent.belongsTo(models.User, {foreignKey: 'userId', as: 'worker'})
      Appointent.belongsTo(models.Clinic, {foreignKey: 'clinicId', as: 'clinic'})
      Appointment.hasOne(models.AppointmentType, {foreignKey: 'appointmentTypeId', as: 'appointmentType'})
      
    }
  }
  Appointment.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
  },
  timestamps: true,
  date: {
      allowNull: false,
      type: DataTypes.DATE
  },
  workerId:{
      allowNull: false,
      type: DataTypes.INTEGER,
  },
  appointmentTypeId:{
    allowNull: false,
    type: DataTypes.INTEGER,
},
  clinicId: {
      type: DataTypes.INTEGER,
      allowNull: false,
  },
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};