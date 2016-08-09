'use strict';

angular.module('arduinoDashBoardApplication.ledsview', 
['ui.router',
 'ngMaterial',
 'arduinoDashBoardApplication.simpleledsview'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
$stateProvider.state('homeview.ledsview', {
    url: '/ledsview',
    templateUrl: 'views/leds/ledsview.html',
    controller: 'ledsViewController'
  });

}])

.controller('ledsViewController', ['$scope', '$state', '$timeout', 
             function($scope, $state, $timeout) {

    $state.go('homeview.ledsview.simpleledsview');    

}]);