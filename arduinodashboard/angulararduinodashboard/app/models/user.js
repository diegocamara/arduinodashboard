"use strict";
module.exports = function(sequelize, DataTypes){

  var User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    }
  }, {freezeTableName: true});

  return User;

}