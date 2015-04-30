'use strict';

/**
 * @ngdoc function
 * @name almostApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the almostApp
 */
angular.module('almostApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
