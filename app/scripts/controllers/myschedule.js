'use strict';

angular.module('tryitApp')
  .controller('MyScheduleCtrl', function ($scope, Favorites) {
    $scope.talks = Favorites.talks();
    $scope.favorites = Favorites;
  });
