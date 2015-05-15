'use strict';

/**
 * @ngdoc function
 * @name hrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hrApp
 */
angular.module('hrApp')
  .controller('DeleteCtrl', function ($scope, employeeService) {
      $scope.position;
      $scope.deleteEmployee = function(){
        employeeService.deleteEmployee($scope.position).success(function(data){
            console.log(data);
        });
      }
  });
