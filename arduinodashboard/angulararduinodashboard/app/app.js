'use strict';

// Declare app level module which depends on views, and components
angular.module('arduinoDashBoardApplication', [
  'ui.router',
  'ngMaterial',
  'arduinoDashBoardApplication.homeview',
  'arduinoDashBoardApplication.version'
]).
config(['$locationProvider', '$urlRouterProvider', '$mdDateLocaleProvider', '$mdThemingProvider',
         function($locationProvider, $urlRouterProvider, $mdDateLocaleProvider, $mdThemingProvider) {
   
   $locationProvider.hashPrefix('!');

  //  $mdThemingProvider.theme('default').dark();
  
   $mdDateLocaleProvider.formatDate = function(date) {
    return moment(date).format('DD/MM/YYYY');
  };  

  $urlRouterProvider.otherwise('/homeview');
}])

.factory('dbService', function(){

  var db;

  return {

    getDb: function(){
      var sqlite3 = require('sqlite3').verbose();

      var filePath = global.__dirname + "/data/arduinodb.sqlite";

      db = new sqlite3.Database(filePath);

      return db;

    }

  }

})

.factory('modelsService', function(){

  var models = require('./models');

  return {

    getModels: function(){
      return models;
    }

  }

});
