(function(){
  'use strict';

  angular.module('thello.demo', [])
          .controller('ThelloController', ['$scope', '$http', ThelloController]);
  function ThelloController($scope, $http){
      $scope.add = function(list, title){
        var card = {
          list: list.id,
          title: title
        };
        $http.post('/thello/cards/', card)
            .then(function(response){
              list.cards.push(response.data);
            },
            function(){
              alert('Could not create card');
            });
      };

      $scope.data = [];
      $http.get('/thello/lists').then(function(response){
        $scope.data = response.data;
      });

  }
}());
