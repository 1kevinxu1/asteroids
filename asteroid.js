(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (object) {
    Asteroids.MovingObject.call(
      this,
      {pos: object.pos,
      vel: Asteroids.Util.randVec(Asteroid.RADIUS),
      radius: Asteroids.Util.randomRange(
        Asteroids.Util.MIN_ASTEROID_RADIUS, Asteroids.Util.MAX_ASTEROID_RADIUS),
      color: Asteroid.COLOR,
      game: object.game}
    );
  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.COLOR = "black";
  Asteroid.RADIUS = 50;

  Asteroid.randomAsteroid = function (DIM_X, DIM_Y, game) {
    return new Asteroid( {pos: Asteroids.Util.randPos(DIM_X, DIM_Y), game: game} );
  }

})();
