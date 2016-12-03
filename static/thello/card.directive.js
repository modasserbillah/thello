( function () {
  'use strict';

  angular.module('thello.demo')
    .directive('thelloCard', CardDirective);

  function CardDirective() {
    return {
              templateUrl: 'static/thello/card.html',
              restrict: 'E',
              controller: [ '$scope', '$http', function($scope, $http){
                  var url = '/thello/cards/' + $scope.card.id + '/';
                  $scope.update = function(){
                    $http.put(
                      url,
                      $scope.card
                    );
                  };

                  $scope.delete = function(){
                    $http.delete(url).then(
                      function(){
                        var cards = $scope.list.cards;
                        cards.splice(cards.indexOf($scope.card),1);
                      }
                    );
                  };


              }]
    };
  }
})();
