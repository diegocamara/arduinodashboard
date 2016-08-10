'use strict';

angular.module('arduinoDashBoardApplication.blinkledsview', 
['ui.router',
 'ngMaterial'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
$stateProvider.state('homeview.ledsview.blinkledsview', {
    views:{
      'blinkledcontentview':{
         url: '/blinkledsview',
         templateUrl: 'views/leds/blinkledview/blinkledview.html',
         controller: 'blinkLedViewController'
      }
    }   
  });

}])

.controller('blinkLedViewController', ['$scope', '$timeout', 
             function($scope, $timeout) {              
     
     

}]);