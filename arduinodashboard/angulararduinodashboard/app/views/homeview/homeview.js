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

.factory('ComponentsService', function(){

  return {

    getComponents: function(){
      var components = [
        {          
          name: 'LED',
          state: 'homeview.ledsview',
          disabled: false
        }
      ];

      return components;
    }

  }

})

.controller('homeviewController', ['$scope', '$state', '$timeout', '$sce', 'ComponentsService', 
             function($scope, $state, $timeout, $sce, ComponentsService) {              
   
    $scope.fiveOptions = {
      initFive: false,
      state: function(){
        var outputHtml = this.initFive ? "<b style='color:green;'>ON</b>" : "<b style='color:red;'>OFF</b>";
        return $sce.trustAsHtml(outputHtml);
      }
    };

    var lastActiveComponent;

    $scope.components = ComponentsService.getComponents();    


    $scope.goTo = function(component){

      if(lastActiveComponent){
        lastActiveComponent.disabled = false;
      }
      
      component.disabled = true;     
      lastActiveComponent = component;

      $state.go(component.state);
    }


}]);