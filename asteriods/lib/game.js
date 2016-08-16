const Asteroid = require('./asteroid');
const Bullet = require('./bullet');
const Ship = require('./ship');



const Game = function() {
  this.asteroids = [];
  this.addAsteroids();
};

Game.DIM_X = 900;
Game.DIM_Y = 1000;
Game.NUM_ASTERIODS = 10;


Game.prototype.randomPosition = function() {
  let x = Math.random() * Game.DIM_X;
  let y = Math.random() * Game.DIM_Y;
  return [x, y];
};

Game.prototype.addAsteroids = function() {
  for(let i = 0; i < Game.NUM_ASTERIODS; i++){
    this.asteroids.push(new Asteroid({ game: this}));
  }
};

Game.prototype.draw = function(ctx){
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  this.asteroids.forEach(function(asteroid) {
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach(function(asteroid) {
    asteroid.move();
  });
};

module.exports = Game;
