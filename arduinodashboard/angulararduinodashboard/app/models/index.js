"use strict";

var loader = require('./loader');
var path = require('path');
var env = process.env.NODE_ENV || 'development';
var config = require('./databaseconfig.json')[env];
var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.database, config.username, config.password, {
  dialect: config.dialect
});

var db = {};

loader(__dirname, function(file){
  var model = sequelize.import(path.join(__dirname, file));
  db[model.modelName] = model;
});

Object.keys(db).forEach(function(modelName){
  if("associate" in db[modelName]){
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
