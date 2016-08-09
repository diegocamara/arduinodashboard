'use strict';

angular.module('arduinoDashBoardApplication.simpleledsview', 
['ui.router',
 'ngMaterial'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
$stateProvider.state('homeview.ledsview.simpleledsview', {
    url: '/simpleledsview',
    templateUrl: 'views/leds/simpleledview/simpleledview.html',
    controller: 'simpleLedViewController'
  });

}])

.controller('simpleLedViewController', ['$scope', '$timeout', 
             function($scope, $timeout) {              
     

}]);