'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Buyer', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      buyer_name: {
        type: Sequelize.STRING
      },
      buyer_email: {
        type: Sequelize.STRING
      },
      contact_number: {
        type: Sequelize.STRING
      },
      contact_address: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Buyer');
  }
};