/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ball.js":
/*!*********************!*\
  !*** ./src/ball.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//import paddle from './paddle';\nclass Ball{\n  constructor(context, paddle, blockArray){\n  this.radius = 15;\n  this.ballX = 300;\n  this.ballY = 300;\n  this.color = \"red\";\n  this.ballXVelocity = Math.floor(Math.random() * 150 + 125) / 70; //FPS = 70 FRAMES PER SECOND\n  this.ballYVelocity = Math.floor(Math.random() * 150 + 125) / 70; //FPS\n  this.context = context;\n  this.paddle = paddle;\n  this.blockArray = blockArray;\n  this.score = 0;\n  this.font = 'bold 20px Open Sans'\n  }\n  draw() {\n    this.ballX += this.ballXVelocity;\n    this.ballY += this.ballYVelocity;\n    this.context.beginPath();\n    this.context.arc(this.ballX, this.ballY, this.radius, 0, 2 * Math.PI, false);\n    this.context.fillStyle = this.color;\n    this.context.fill();\n    this.context.lineWidth = 5;\n    this.context.stroke()\n    this.context.font = this.font;\n    this.context.textAlign = 'center';\n    this.context.fillText('Score: ' + this.score, 450, 30)\n  }\n\n  startMoving() {\n    if (Math.floor(Math.random() * 2) == 0) {\n      this.ballXVelocity = -this.ballXVelocity;\n    }\n    if (Math.floor(Math.random() * 2) == 0) {\n      this.ballYVelocity = -this.ballYVelocity;\n    }\n  }\n\n  randomDirection(){\n    if (Math.floor(Math.random() * 2) == 0) {\n      this.ballXVelocity = -this.ballXVelocity;\n    }\n    if (Math.floor(Math.random() * 2) == 0) {\n      this.ballYVelocity = -this.ballYVelocity;\n    }\n  }\n  collision() {\n    if (this.ballX - this.radius + (this.radius / 1.25) < + this.radius / 2 && this.ballXVelocity < 0) {\n      this.ballXVelocity = -this.ballXVelocity\n    }\n    if (this.ballX + this.radius + (this.radius / 1.25) > 600 +  this.radius && this.ballXVelocity > 0) {\n      this.ballXVelocity = -this.ballXVelocity;\n    }\n    if (this.ballY - this.radius + (this.radius / 1.25) < this.radius / 2 && this.ballYVelocity < 0) {\n      this.ballYVelocity = -this.ballYVelocity;\n    }\n    if ((this.ballX > this.paddle.rectangleX && \n      this.ballX + this.radius - (this.radius / 2) < \n      this.paddle.rectangleX + this.paddle.rectangleWidth) && \n      (this.ballY >= this.paddle.rectangleY - this.paddle.rectangleHeight) \n      && this.ballYVelocity > 0) { \n      this.ballYVelocity = - this.ballYVelocity;\n    }\n\n\n    [].concat(...this.blockArray).forEach(block =>{\n      if((this.ballX > block.blockX) && this.ballX < block.blockX + block.blockWidth\n      && this.ballY  - this.radius < block.blockY + block.blockHeight && this.ballYVelocity !== 0 &&\n      block.shown ){\n        block.shown = false;\n        this.score += 1;\n        this.ballYVelocity = -this.ballYVelocity;       \n      }\n      if(this.score === 40){\n        this.context.font = this.font;\n        this.context.textAlign = 'center';\n        this.context.fillText(\"Game over!!!\", 300, 300)\n      }\n    });\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\n\n\n\n\n\n\n// let ballX = canvas.width / 2;\n// let ballY = canvas.height / 2;\n// let ballSize = 30;\n\n// let ballXVelocity = Math.floor(Math.random() * 150 + 125) / FPS; ///Math.random creates a value between zero and one\n// //gives me a number between 100, 25\n// let ballYVelocity = Math.floor(Math.random() * 150 + 125) / FPS;\n// //random ball direction\n// if (Math.floor(Math.random() * 2) == 0) {\n//   ballXVelocity = -ballXVelocity;\n// }\n// if (Math.floor(Math.random() * 2) == 0) {\n//   ballYVelocity = -ballYVelocity;\n// }\n\n\n\n\n//# sourceURL=webpack:///./src/ball.js?");

/***/ }),

/***/ "./src/block.js":
/*!**********************!*\
  !*** ./src/block.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Block{\n  constructor(context, blockX, blockY){\n    this.blockX = blockX;\n    this.blockY = blockY;\n    this.blockWidth = 50;\n    this.blockHeight = 50;\n    this.context = context;\n    this.shown = true;\n}\ndraw(){\n    this.context.beginPath();\n    this.context.rect(this.blockX, this.blockY, this.blockWidth, this.blockHeight);\n    function get_random_color() {\n      function c() {\n        var hex = Math.floor(Math.random() * 256).toString(16);\n        return (\"0\" + String(hex)).substr(-2);\n      }\n      return \"#\" + c() + c() + c();\n    }\n    this.context.fillStyle = get_random_color();\n    this.context.fill();\n    this.context.stroke();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Block);\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/block.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ball */ \"./src/ball.js\");\n/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paddle */ \"./src/paddle.js\");\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block */ \"./src/block.js\");\n\n\n\n\ndocument.getElementById(\"start-button\").addEventListener(\"click\", ()=>{\n  document.getElementById(\"start-page-div\").style.display = \"none\";\n  const FPS = 70; ///FRAMES PER SECOND\n  let canvas = document.getElementById(\"my-canvas\");\n  canvas.style.display = \"flex\"\n  let context = canvas.getContext(\"2d\");//SETTING 2D DIMENSIONS\n  //  let image = new Image();\n  //  image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Hubble_ultra_deep_field_high_rez.jpg/600px-Hubble_ultra_deep_field_high_rez.jpg'\n\n  ///SET UP GAME LOOP CALLS IT EVERY THIRTIETH OF A SECOND\n\n  const paddle = new _paddle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](context); ///SETTING UP PADDLE INSTANCE\n//  const block = new Block(context);\n\n  //block.drawBlocks();\n\n  const bricksArray = [] ///CREATING ARRAY OF BRICK INSTANCES\n  for(let i = 0; i < 4; i++){\n    const rowArray = [];\n    for(let j = 0; j < 10; j++){\n      rowArray.push(new _block__WEBPACK_IMPORTED_MODULE_2__[\"default\"](context, 50 * (j + 1), 50 * (i + 1)))\n    }\n    //ABOVE I AM USING THE INDEX OF J AND I TO ALSO CHANGE THE POSITIONING OF THE \n    //SQUARE BASED ON THE INDEX, 2D ARRAY OF ROWS AND COLUMNS\n    bricksArray.push(rowArray);\n  }\n  const drawBlocks = () =>{\n     bricksArray.forEach(row => {\n       row.forEach(block => {\n         if(block.shown){\n           block.draw();\n         }      \n       })\n    }) \n  }\n\n  ///ABOVE I AM DRWAING EACH BRICK. CALLING ON THE BRICK INSTANCE\n\n\n  const ball = new _ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"](context, paddle, bricksArray);\n\n  ///CREATING NEW BALL AND PASSING IN THE CONTEXT THE PADDLE AND THE BRICS ARRAY\n  //ALL OF THESE ARE NECESSARY BECAUSE THE COLLISION METHOD\n  ball.startMoving();\n\n\n\n\n  const refreshIntervalId = setInterval(update, 1000 / FPS);\n\n \n    /// takes handler and TIMEOUT --- how often it calls it\n\n  //CALLING THE FUNCTION AND CLEARING CANVAS EVERYTIME IT IS CALLED\n\n   function update() {\n     console.log(ball.ballX)\n    context.clearRect(0, 0, canvas.width, canvas.height);\n    ball.draw();\n    paddle.draw();\n    drawBlocks();\n    paddle.movePaddle();\n    ball.collision();\n     if (ball.ballY > 600) {\n       clearInterval(refreshIntervalId);\n     }\n  }\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/paddle.js":
/*!***********************!*\
  !*** ./src/paddle.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Paddle{\n  constructor(context){\n    this.rectangleX = 250;\n    this.rectangleY = 570;\n    this.rectangleWidth = 100;\n    this.rectangleHeight = 25;\n    this.color = \"#2e3548\";\n    this.strokeStyle= \"#ffcd05\"\n    this.context = context;\n  }\n\n\n  draw(){\n     this.context.beginPath();\n     this.context.rect(this.rectangleX, this.rectangleY, this.rectangleWidth, this.rectangleHeight);\n     this.context.fillStyle = this.color;\n     this.context.strokeStyle = this.strokeStyle;\n     this.context.fill();\n     this.context.stroke();\n  }\n\n  movePaddle(){\n    if (key.isPressed(\"left\") && this.rectangleX > 0) {\n      //console.log(rectangleX)\n   //   console.log(canvas.width)\n      this.rectangleX -= 250 / 70;\n    }\n\n    if (key.isPressed(\"right\") && this.rectangleX < 500) {\n      this.rectangleX += 250 / 70;\n    //  console.log(rectangleX)\n    //  console.log(canvas.width)\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Paddle);\n\n//# sourceURL=webpack:///./src/paddle.js?");

/***/ })

/******/ });