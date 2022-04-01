'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Clinic.hasMany(models.Appointment, {foreignKey: 'clinicId', as: 'appointments'})
    }
  }
  Clinic.init({
    name:{
      allowNull: false,
      type: DataTypes.STRING
  },
  address: {
      allowNull: false,
      type: DataTypes.STRING,
  },
  timestamps: true,
  phone: {
      allowNull: false,
      type: DataTypes.STRING,
  },
  email: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: process.env.EMAIL,
      validate: {
          isEmail: true
      }
      
  },
  description:{
      allowNull: true,
      type: DataTypes.STRING,
      validate:{
          notEmpty:true
      }
  },
  photo:{
      allowNull:true,
      type: DataTypes.STRING
  }
  }, {
    sequelize,
    modelName: 'Clinic',
  });
  return Clinic;
};