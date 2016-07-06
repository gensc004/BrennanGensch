'use strict';

angular.module('brennanGenschApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $stateProvider.state('morrisCode', {
      url: '/morrisCode',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    });

    $locationProvider.html5Mode(true);
  });
