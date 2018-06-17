module.exports = function(sequelize, DataTypes) {
    
    var Class = sequelize.define("Buyers", {
      buyer_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50]
        }
      },
      buyer_email: {
          type:DataTypes.STRING,
          allowNull: false
      },
      
      contact_number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      buyer_address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      class_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      class_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      class_time: {
        type: DataTypes.TIME,
        allowNull: false
      },
      class_location: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });
    return Class;
  };


  // quick note -> if there is a way to put .DATETIME attached to the type, especially to match the datepicker to mysql, then that might be best