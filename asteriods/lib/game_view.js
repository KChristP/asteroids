const Game = require('./game');

const GameView = function(game, ctx) {
  this.ctx = ctx;
  this.game = game;
};


GameView.prototype.start = function() {
  let ctxNOW = this.ctx;
  setInterval(function() {
    this.game.moveObjects();
    this.game.draw(ctxNOW);
  }, 20);
};


module.exports = GameView;
