'use strict';
module.exports = (sequelize, DataTypes) => {
  var Buyer = sequelize.define('Buyer', {
    buyer_name: {
      type: DataTypes.STRING,
      allownull: false
    },
    buyer_email: {
      type: DataTypes.STRING,
      allownull:false
    },
    contact_number: {
      type: DataTypes.STRING,
      allownull:false
    },
    contact_address: {
      type: DataTypes.STRING,
      allownull:false
    },
    //need to fill in remaining buyer model
  }, {});
  Buyer.associate = function(models) {
    // associations can be defined here
  };
  return Buyer;
};