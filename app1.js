( function(){
'use strict';

angular.module('myfristApp', [])

.controller('MyFirstController', function($scope){

  $scope.name = "Abdelhay"
  $scope.sayHello = function(){

    return "Hello coursera"
  }

})


})();
