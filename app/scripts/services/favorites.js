'use strict';

angular.module('tryitApp')
  .factory('Favorites', function ($log) {
    var favorites = [];

    function addTalk(talk) {
      if (!isIn(talk)) {
        $log.info('Adding talk', talk.id);
        favorites.push(talk);
      } else {
        $log.info('Talk already added');
      }
    }

    function isIn(talk) {
      var i = favorites.length;
      while (i--) {
        if (talk.id === favorites[i].id) {
          return true;
        }
      }
      return false;
    }

    return {
      addTalk: addTalk,
      isIn: isIn,
      talks: function() {
        return favorites;
      },
    };
  });
