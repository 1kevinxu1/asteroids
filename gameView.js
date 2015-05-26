(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(ctx, game) {
    this.ctx = ctx;
    this.game = game;
  }

  GameView.prototype.start = function() {
    window.setInterval((function () {
      this.game.drawAndMoveAsteroids(this.ctx);
    }).bind(this), 1000/1000);
  };

})();
