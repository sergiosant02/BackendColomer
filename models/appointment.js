'use strict'
const {
    Model
  } = require('sequelize')

  module.exports = (sequelize, DataTypes) => {
      class Appointent extends Model {

          static associate(models) {
            Appointent.belongsTo(models.User, {foreignKey: 'userId', as: 'client'}),
            Appointent.belongsTo(models.User, {foreignKey: 'userId', as: 'worker'})
            Appointent.belongsTo(models.Clinic, {foreignKey: 'clinicId', as: 'clinic'})
          }
      }
      Appointent.init({
          appointentId: {
              allowNull: false,
              primaryKey: true,
              type: DataTypes.INTEGER,
              autoIncrement: true,
              unique: true
          },
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
          clinicId: {
              type: DataTypes.INTEGER,
              allowNull: false,
          },
        },
          {
            sequelize,
            modelName: 'Appointment'
          })
        return Appointent
  }