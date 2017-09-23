(function () {
  'use strict';

  angular.module('myfirstapp',[])

  .controller('MyFirstController', function ($scope) {
    $scope.name = "Hussain";
    $scope.sayHello = function () {
      return "Hello";
    }
  });
})();
