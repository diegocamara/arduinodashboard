'use strict';

angular.module('arduinoDashBoardApplication.homeview', 
['ui.router',
 'ngMaterial',
 'arduinoDashBoardApplication.ledsview'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
  $stateProvider.state('homeview', {
    url: '/homeview',
    templateUrl: 'views/homeview/homeview.html',
    controller: 'homeviewController'
  });

}])

.controller('homeviewController', ['$scope', '$state', '$timeout', '$mdSidenav', 
             function($scope, $state, $timeout, $mdSidenav) {              
   
    $scope.goTo = function(state){
      $state.go(state);
    }


}]);