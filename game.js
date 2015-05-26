(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function (xDim, yDim) {
    this.DIM_X = xDim;
    this.DIM_Y = yDim;
    this.asteroids = [];
    this.ship = new Asteroids.Ship({pos: [xDim/2, yDim/2], game: this});
  };
  Game.MIN_NUM_ASTEROIDS = 4;

  Game.prototype.drawAndMoveAsteroids = function (ctx) {
    ctx.clearRect(0,0, this.DIM_X, this.DIM_Y);
    this.ensureAsteroids();
    this.checkCollisions();
    this.asteroids.forEach(function (asteroid) {
      asteroid.move();
      asteroid.draw(ctx);
    });
    this.ship.draw(ctx);
  };

  Game.prototype.ensureAsteroids = function () {
    while (this.asteroids.length < Game.MIN_NUM_ASTEROIDS) {
      this.asteroids.push(Asteroids.Asteroid.randomAsteroid(this.DIM_X, this.DIM_Y, this));
    }
  };

  Game.prototype.wrap = function (pos) {
    pos[0] = (pos[0] + this.DIM_X) % this.DIM_X;
    pos[1] = (pos[1] + this.DIM_Y) % this.DIM_Y;

    return pos;
  };

  Game.prototype.checkCollisions = function () {
    for (var i = 0; i < this.asteroids.length; i++) {
      for (var j = i + 1; j < this.asteroids.length; j++) {
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
          this.asteroids.splice(j, 1);
          this.asteroids.splice(i, 1);
        }
      }
      if (this.ship.isCollidedWith(this.asteroids[i])) {console.log("GAME OVER");}
    }
  };

  Game.prototype.remove = function (asteroid) {

  };

  Game.prototype.step = function () {


  };
})();
