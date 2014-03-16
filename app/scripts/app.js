'use strict';

angular.module('tryitApp', [
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleCtrl'
      })
      .when('/my-schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'MyScheduleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
