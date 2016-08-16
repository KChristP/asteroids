const MovingObject = require ("./moving_object");
const Game = require("./game");
const Util = require("./util");

const Asteroid = function(options = {}) {
  let randomVec = [Math.floor(Math.random() * 5), Math.floor(Math.random() *5)];

  let defaultHash = {pos: options.pos || options.game.randomPosition,
                    color: "#00ffff",
                    radius: 10,
                    vel: randomVec
    };
  MovingObject.call(this, defaultHash);
};

Util.inherits(Asteroid, MovingObject);



module.exports = Asteroid;
