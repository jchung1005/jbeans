'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'mm.foundation',
  'ui.utils',
  'angularCharts'
]);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'});
  $routeProvider.when('/about', {templateUrl: 'views/about.html', controller: 'AboutCtrl'});
  $routeProvider.when('/contact', {templateUrl: 'views/contact.html', controller: 'ContactCtrl'});
  $routeProvider.when('/cv', {templateUrl: 'views/cv.html', controller: 'CVCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);


app.run(function ($rootScope, $location) {
  $rootScope.$on("$locationChangeStart", function (event, next, current) {
    if (!$location.path().match(/^\/?$/) && !$rootScope.visitedOnce) {
      $rootScope.visitedOnce = true;
    }
  });
});


