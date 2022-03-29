const {
    Model
  } = require('sequelize')

  module.exports = (sequelize, DataTypes) => {
    class Clinic extends Model {
        static associate(models) {
            Clinic.hasMany(models.Appointment, {foreignKey: 'clinicId'})
        }
    }

    Clinic.init({
        clinicId: {
            allowNull: false,
            autoIncrement: true,
            unique: true,
            type: DataTypes.INTEGER
        },
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
    },
        {
            sequelize,
            modelName: 'Clinic'
          })
        return Clinic
  }