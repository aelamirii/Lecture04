(function () {
'use strict';


  angular.module('myfristApp', [])

  .controller('MyFirstController' , function($scope) {
$scope.name = "Abdelhay"
$scope.sayhello = function () {
return "hello coursera"

}

  } )

})();
