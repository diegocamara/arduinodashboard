'use strict';

angular.module('callsApplication.homeview', ['ngRoute', 'ngMaterial'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/homeview', {
    templateUrl: 'homeview/homeview.html',
    controller: 'homeviewController'
  });
}])

.controller('homeviewController', ['$scope', '$timeout', '$mdSidenav', 
             function($scope, $timeout, $mdSidenav) {              
   
  

}]);