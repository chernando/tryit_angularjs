'use strict';

angular.module('tryitApp')
  .controller('ScheduleCtrl', function ($scope, Talks, Favorites) {
    $scope.talks = Talks.query();
    $scope.favorites = Favorites;
  });
