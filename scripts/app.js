'use strict';

/**
 * @ngdoc overview
 * @name hrApp
 * @description
 * # hrApp
 *
 * Main module of the application.
 */
angular
  .module('hrApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/delete', {
        templateUrl: 'views/delete.html',
        controller: 'DeleteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
