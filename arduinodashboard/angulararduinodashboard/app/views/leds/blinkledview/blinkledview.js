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

.controller('blinkLedViewController', ['$scope', '$mdDialog', 
             function($scope, $mdDialog) {              
    
     $scope.showAddLedDialog = function(ev){

       $mdDialog.show({         
         controller: BasicLedDialogController,
         templateUrl: 'views/leds/blinkledview/basicleddialog.html',
         parent: angular.element(document.body),
         targetEvent: ev,
         clickOutsideToClose: true
       })
       .then(function(led){
         console.log(led);
       }, function(){
         console.log('cancel');
       });

     }

}]);

function BasicLedDialogController($scope, $mdDialog, ComponentsService){

  $scope.led = {
    pin: 0
  };

  $scope.pins = ComponentsService.getBorderDigitalPins();

  $scope.closeDialog = function(){
    $mdDialog.cancel();
  }

  $scope.confirmLed = function(){
    $mdDialog.hide($scope.led);
  }

}