angular.module('hrApp').factory('employeeService',  function($http){
    var employeeService = {};

    employeeService.getAllEmployees = function(){
        var endpoint = 'http://127.0.0.1:5000/hr'
        return $http.get(endpoint);
    }

    employeeService.getEmployee = function(name){
      var endpoint = 'http://127.0.0.1:5000/hr/' + name;
      return $http.get(endpoint);
    }

    employeeService.updateEmployee = function(name, employee, position){
      var endpoint = 'http://127.0.0.1:5000/hr/' + name;
      return $http.put(endpoint , {'name':employee, 'position':position});
    }

    employeeService.deleteEmployee = function(position){
      var endpoint = 'http://127.0.0.1:5000/hr/' + position;
      return $http.delete(endpoint);
    }

    return employeeService;
});
