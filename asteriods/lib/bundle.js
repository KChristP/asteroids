/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Game = __webpack_require__(1);
	const GameView = __webpack_require__(6);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Asteroid = __webpack_require__(2);
	const Bullet = __webpack_require__(4);
	const Ship = __webpack_require__(5);
	
	
	
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


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const MovingObject = __webpack_require__ (3);
	const Game = __webpack_require__(1);
	const Util = __webpack_require__(7);
	
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


/***/ },
/* 3 */
/***/ function(module, exports) {

	const MovingObject = function(options){
	  this.pos = options.pos;
	  this.vel = options.vel;
	  this.radius = options.radius;
	  this.color = options.color;
	};
	
	MovingObject.prototype.draw = function(ctx){
	  ctx.fillStyle = this.color;
	  ctx.beginPath();
	
	  ctx.arc(
	    this.pos[0],
	    this.pos[1],
	    this.radius,
	    0,
	    2 * Math.PI,
	    true
	  );
	  ctx.fill();
	};
	
	MovingObject.prototype.move = function() {
	  this.pos[0] += this.vel[0];
	  this.pos[1] += this.vel[1];
	  return this.pos;
	};
	
	
	module.exports = MovingObject;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const MovingObject = __webpack_require__ (3);
	
	function Bullet() {
	
	}
	
	module.exports = Bullet;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	const MovingObject = __webpack_require__ (3);
	
	function Ship() {
	
	}
	module.exports = Ship;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	const Game = __webpack_require__(1);
	
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


/***/ },
/* 7 */
/***/ function(module, exports) {

	
	const Util = {
	
	  inherits (childClass, parentClass) {
	    function Surrogate() {}
	    Surrogate.prototype = parentClass.prototype;
	    childClass.prototype = new Surrogate();
	    childClass.prototype.constructor = childClass;
	  },
	
	
	
	};
	
	
	
	module.exports = Util;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map