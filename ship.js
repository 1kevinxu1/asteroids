(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (object) {
    Asteroids.MovingObject.call(this, {pos: object.pos,
                                       vel: 0,
                                       radius: Ship.RADIUS,
                                       color: Ship.COLOR,
                                       game: object.game} )
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.COLOR = "red";
  Ship.RADIUS = 20;

  Ship.prototype.

})();
