'use strict';
module.exports = (sequelize, DataTypes) => {
  var Class = sequelize.define('Class', {
    class_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    city_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    class_attendance: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[1, 2] 
      }
    },
    max_attendance: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 2]
      }
    }
  }, {});
  Class.associate = function(models) {
    // associations can be defined here
  };
  return Class;
};