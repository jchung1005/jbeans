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
  'ui.utils'
]);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html', 
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html', 
      controller: 'AboutCtrl'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html', 
      controller: 'ContactCtrl'
    })
    .when('/cv', {
      templateUrl: 'views/cv.html', 
      controller: 'CVCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);


app.run(function ($rootScope, $location, $anchorScroll) {
  $rootScope.$on("$locationChangeStart", function (event, next, current) {
    if (!$location.path().match(/^\/?$/) && !$rootScope.visitedOnce) {
      $rootScope.visitedOnce = true;
    }
    $anchorScroll();
  });
});


