"use strict";

var loader = require('./loader');
var path = require('path');
var models = {};

loader(__dirname, function(file){  
  var model = require('./'+file);
  models[model.objectIdetifier] = model;
});

// Object.keys(models).forEach(function(name){  
 
// });

module.exports = models;
