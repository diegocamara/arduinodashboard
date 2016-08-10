'use strict';

angular.module('arduinoDashBoardApplication.ledsview', 
['ui.router',
 'ngMaterial',
 'arduinoDashBoardApplication.blinkledsview',
 'arduinoDashBoardApplication.pulseledsview'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
$stateProvider.state('homeview.ledsview', {
    views:{
      'componentcontentview': {
        url: '/ledsview',
        templateUrl: 'views/leds/ledsview.html',
        controller: 'ledsViewController'
      }
    }
  });

}])

.factory('LedsViewService', function(){

  return {

    getLedViews: function(){

      var ledsComponents = [
        {
          name:'Blink',
          state: 'homeview.ledsview.blinkledsview',
          viewName: 'blinkledcontentview'
        },
        {
          name: 'Pulse',
          state: 'homeview.ledsview.pulseledsview',
          viewName: 'pulseledcontentview'
        }
      ];

      return ledsComponents;

    }

  }

})

.controller('ledsViewController', ['$scope', '$state', 'LedsViewService',
             function($scope, $state, LedsViewService) {

      $scope.ledTabs = LedsViewService.getLedViews();

      $scope.goTo = function(tab){
        $state.go(tab.state);
      }

    $state.go('homeview.ledsview.blinkledsview');    

}]);