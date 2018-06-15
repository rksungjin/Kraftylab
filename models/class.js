module.exports = function(sequelize, DataTypes) {
    
    var Class = sequelize.define("Class", {
      class_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50]
        }
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city_address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      class_attendance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1, 3]
          }
      },
      max_attendance: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            len: [1, 3]
          }
      }
    });
    return Class;
  };
  