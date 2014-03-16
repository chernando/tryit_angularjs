'use strict';

angular.module('tryitApp')
  .controller('ScheduleCtrl', function ($scope, Talks) {
    $scope.talks = Talks.query();
  });
