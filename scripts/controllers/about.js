'use strict';

/**
 * @ngdoc function
 * @name hrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hrApp
 */
angular.module('hrApp')
  .controller('AboutCtrl', function ($scope, employeeService) {
    $scope.name;
    $scope.employee = 'Name';
    $scope.position = 'Position';
    $scope.viewButton = true;

    $scope.getEmployee = function(){
      employeeService.getEmployee($scope.name).success(function(data){
          $scope.employee = data.employee.name;
          $scope.position = data.employee.position;
          $scope.viewButton = false;
      });
    }

    $scope.updateEmployee = function(){
      $scope.employee = $('#employee').html();
      $scope.position = $('#position').html();
      employeeService.updateEmployee($scope.name, $scope.employee, $scope.position).success(function(data){
          console.log(data);
      })
    }

  });
