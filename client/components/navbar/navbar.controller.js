'use strict';

angular.module('brennanGenschApp')
  .controller('NavbarCtrl', function ($scope, $location, $window) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }
    ];
    $scope.menuButtons= [
      {
        'title': 'Morris Code',
        'url': '/morrisCode'
      }
    ]

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
    $scope.open = function(url) {
      $window.open(url)
    }
  });
