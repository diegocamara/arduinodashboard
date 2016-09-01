"use strict";

var loader = require('./loader');
var path = require('path');
var env = process.env.NODE_ENV || 'development';
var config = require('./databaseconfig.json')[env];

var Sequelize = require('sequelize-sqlite').sequelize
var sqlite    = require('sequelize-sqlite').sqlite


// var Sequelize = require('sequelize');
var sequelize = new Sequelize("sqlite:arduinodb.sqlite", config.username, config.password, {
  dialect: config.dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  storage: "./data/arduinodb.sqlite"
});


var db = {};

loader(__dirname, function(file){  
  var model = sequelize.import(path.join(__dirname, file));  
  db[model.name] = model;
});

Object.keys(db).forEach(function(name){  
  if("associate" in db[name]){
    db[name].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
