(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function () {
    this.pos = this.game.wrap(
      [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]);
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var distance = Math.sqrt(
      Math.pow((otherObject.pos[1] - this.pos[1]), 2) +
      Math.pow((otherObject.pos[0] - this.pos[0]), 2));

    var dRad = otherObject.radius + this.radius;

    return dRad > distance;
  };

})();
