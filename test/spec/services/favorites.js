'use strict';

describe('Service: Favorites', function () {

  // load the service's module
  beforeEach(module('tryitApp'));

  // instantiate service
  var Favorites,
    talk1 = { id: 1 },
    talk2 = { id: 2 };

  beforeEach(inject(function (_Favorites_) {
    Favorites = _Favorites_;
  }));

  it('should have no favorites', function () {
    expect(Favorites.talks().length).toBe(0);
  });

  it('should add favorites', function () {
    expect(Favorites.talks().length).toBe(0);
    Favorites.addTalk(talk1);
    Favorites.addTalk(talk2);
    expect(Favorites.talks().length).toBe(2);
  });

  it('should not add same talk twice', function () {
    expect(Favorites.talks().length).toBe(0);
    Favorites.addTalk(talk1);
    Favorites.addTalk(talk1);
    expect(Favorites.talks().length).toBe(1);
  });

  it('should identify favorites', function() {
    expect(Favorites.isIn(talk1)).toBe(false);
    Favorites.addTalk(talk1);
    expect(Favorites.isIn(talk1)).toBe(true);
  });

});
