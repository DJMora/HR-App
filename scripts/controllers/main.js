'use strict';

/**
 * @ngdoc function
 * @name hrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hrApp
 */
angular.module('hrApp')
  .controller('MainCtrl',['$scope','employeeService', function ($scope, employeeService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getAllEmployees = function(){
        employeeService.getAllEmployees().success(function(data){
            $scope.employees = data.employees;
        });
    }

  }]);
