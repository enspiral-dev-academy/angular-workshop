'use strict';

angular
  .module('demoApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/basics', {
        templateUrl: 'views/basics.html',
        controller: 'BasicsCtrl'
      })
      .when('/chat', {
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
