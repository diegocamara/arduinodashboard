'use strict';

angular.module('arduinoDashBoardApplication.pulseledsview', 
['ui.router',
 'ngMaterial'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
$stateProvider.state('homeview.ledsview.pulseledsview', {
    views: {
        'pulseledcontentview' :{
            url: '/pulseledsview',
            templateUrl: 'views/leds/pulseledview/pulseledview.html',
            controller: 'pulseLedViewController'
        }
    }    
  });

}])

.controller('pulseLedViewController', ['$scope', '$timeout', 
             function($scope, $timeout) {              
     

}]);