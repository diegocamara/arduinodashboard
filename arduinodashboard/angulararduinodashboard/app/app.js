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
}]);
