Function.prototype.inherits = function(superClass) {
  function Surrogate() {}
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};


function MovingObject () {}
MovingObject.prototype.direction = function() {
  console.log("we are moving in this direction!");
};

function Ship () {}
Ship.inherits(MovingObject);
Ship.prototype.shipType = function() {
  console.log("We are a big big ship!");
};


let ship1 = new Ship();
ship1.direction();

let moving1 = new MovingObject();
moving1.direction();
moving1.shipType();

function Asteroid () {}
Asteroid.inherits(MovingObject);
