(function(){
  var app = angular.module('autotinder', []);

  app.controller("CardController", ['$scope', '$timeout', '$interval', function($scope, $timeout, $interval) {

   var like = function(){
     $scope.activeIndex = $scope.cards[$scope.cards.length-1];
     $timeout(function(){$scope.cards.unshift($scope.cards.pop());}, 500);
   };

   $scope.activeIndex = 0;
   $scope.cards = [3, 2, 1, 6];

   $scope.autoLike = function() {
     $interval(function(){like();}, 1000);
   };


 }]);

})();
