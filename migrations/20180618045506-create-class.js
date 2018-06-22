'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Class', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      class_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      city_address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date_time: {
        type: Sequelize.STRING,
        allowNull: false
      },
      class_attendance: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len:[1, 2] 
        }
      },
      max_attendance: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          len: [1, 2]
        }
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Class');
  }
};