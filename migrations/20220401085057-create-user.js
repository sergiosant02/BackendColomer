'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        
      },
      token: {
        allowNull: true,
        type: Sequelize.STRING
      },
      tokenExpiration: {
        allowNull: true,
        type: Sequelize.DATE
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      photo: {
          allowNull:true,
          type: Sequelize.STRING
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      postalCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userType: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: [
          'worker',
          'owner',
          'client'
        ]
      },
      birthDate: {
          allowNull: false,
          type: Sequelize.DATE,
      },
      dni: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};