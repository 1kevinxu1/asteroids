(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Util = function () {};

  Asteroids.Util.MAX_ASTEROID_RADIUS = 100;
  Asteroids.Util.MIN_ASTEROID_RADIUS = 10;

  Asteroids.Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate () {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Asteroids.Util.randVec = function (size) {
    var dx = (Math.random() * 2) - 1;
    var dy = (Math.random() * 2) - 1;

    dx = dx * (70/size);
    dy = dy * (70/size);

    return [dx, dy];
  };

  Asteroids.Util.randPos = function (DIM_X, DIM_Y) {
    var maxRange = Asteroids.Util.MAX_ASTEROID_RADIUS;
    var axis = Asteroids.Util.coinFlip();
    var maxes = [DIM_X, DIM_Y];
    var position = [0, 0];
    position[axis] = maxes[axis] * Asteroids.Util.coinFlip();
    other_axis = (axis + 1) % 2
    position[other_axis] = Asteroids.Util.randomRange(
      0 - maxRange, maxes[other_axis] + maxRange);

    for (var i = 0; i < 2; i++) {
      if (position[i] === 0) {
        position[i] = position[i] - maxRange;
      } else if (position[i] === maxes[i]) {
        position[i] = position[i] + maxRange;
      }
    }
    return position;
  };

  Asteroids.Util.randomRange = function (low, high) {
    return (Math.random() * ((high+low))) + low;
  }
  // simulates a coin flip toss for 0 or 1
  Asteroids.Util.coinFlip = function () {
    return Math.round(Math.random());
  }

})();
