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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\ndocument.addEventListener(\"DOMContentLoaded\", ()=>{\n  const FPS = 70; ///FRAMES PER SECOND\n  let canvas = document.getElementById(\"my-canvas\");\n  let context = canvas.getContext(\"2d\");\n  ///SET UP GAME LOOP CALLS IT EVERY THIRTIETH OF A SECOND\n  setInterval(update, 1000 / FPS) /// takes handler and TIMEOUT --- how often it calls it\n  //SET THE BALL STARTING POSITION\n  let ballX = canvas.width / 2;\n  let ballY = canvas.height / 2;\n  let ballSize = 30;\n\n  //MAKE RECTANGLE AND STARTING POSITION;\n  let rectangleX = 250;\n  let rectangleY = 570;\n  let rectangleWidth = 100;\n  let rectangleHeight = 25;\n\n\n  //MAKE BLOCKS AND STARTING POSITION\n  let blockX = 50;\n  let blockY = 30;\n  let blockWidth = 50;\n  let blockHeight = 50;\n\n  const array = []\n  let i = 0\n  const squareObject = {}\n  while(i < 40){\n    context.beginPath();\n    context.rect(blockX, blockY, blockWidth, blockHeight);\n      function get_random_color() {\n        function c() {\n          var hex = Math.floor(Math.random() * 256).toString(16);\n          return (\"0\" + String(hex)).substr(-2); \n        }\n        return \"#\" + c() + c() + c();\n      }\n    context.fillStyle = get_random_color();\n    context.fill();\n    context.stroke();\n    Object.assign(squareObject, context);\n      if (blockX >= 500) {\n        blockX = 0;\n        blockY += blockHeight;\n      }\n    i += 1\n    blockX += blockWidth;\n  }\n\n  \n  //MAX, MIN\n  let ballXVelocity = Math.floor(Math.random() * 150 + 125) / FPS; ///Math.random creates a value between zero and one\n  //gives me a number between 100, 25\n  let ballYVelocity = Math.floor(Math.random() * 150 + 125) / FPS;\n  //random ball direction\n  if (Math.floor(Math.random() * 2) == 0) {\n    ballXVelocity = -ballXVelocity;\n  }\n  if (Math.floor(Math.random() * 2) == 0) {\n    ballYVelocity = -ballYVelocity;\n  }\n  ///UPDATE FUNCTION\n  function update() {\n\n    ballX += ballXVelocity;\n    ballY += ballYVelocity;\n\n\n    context.beginPath();\n    context.rect(rectangleX, rectangleY, rectangleWidth, rectangleHeight);\n    context.fillStyle = 'red';\n    context.fill();\n    context.stroke();\n\n    \n    context.beginPath();\n    context.arc(ballX, ballY, ballSize, 0, 2 * Math.PI, false);\n    context.fillStyle = 'green';\n    context.fill();\n    context.lineWidth = 5;\n    context.stroke();\n\n\n\n    if (ballX - ballSize + (ballSize / 1.25 ) < ballSize /2 && ballXVelocity < 0) {\n      ballXVelocity = -ballXVelocity;\n      console.log(rectangleX)\n      console.log(ballY)\n    }\n    if (ballX + ballSize + (ballSize / 1.25) > canvas.width + ballSize && ballXVelocity > 0) {\n      ballXVelocity = -ballXVelocity;\n      console.log(rectangleX)\n      console.log(ballY)\n    }\n    if (ballY - ballSize + (ballSize / 1.25) < ballSize / 2 && ballYVelocity < 0) {\n      ballYVelocity = -ballYVelocity;\n      console.log(rectangleX)\n      console.log(ballY)\n    }\n\n    if ((ballX > rectangleX && ballX + ballSize - ballSize / 2 < rectangleX + rectangleWidth) && (ballY >= rectangleY - rectangleHeight) && ballYVelocity > 0){  // && ballY > rectangleY + rectangleHeight  && ballYVelocity > 0\n      ballYVelocity = - ballYVelocity;\n    }\n\n\n\n\n    if (key.isPressed(\"left\") && rectangleX > 0){\n      console.log(rectangleX)\n      console.log(canvas.width)\n      rectangleX -= 250 / FPS;\n    }\n\n    if (key.isPressed(\"right\") && rectangleX < 500) {\n      rectangleX += 250 / FPS;\n      console.log(rectangleX)\n      console.log(canvas.width)\n    }\n  }\n})\n\n\n\n\n\n\n\n\n\n\n\n\n///DRAWTING ON WINDOW STEPS BELOW \n\n// undefined\n// const ctx = canvasEl.getContext(\"2d\")\n// undefined\n// hello.draw(ctx)\n// VM3875: 1 Uncaught ReferenceError: hello is not defined\n// at<anonymous>: 1: 1\n//   (anonymous) @VM3875: 1\n// const hello = new MovingObject({\n//   pos: [30, 30],\n//   vel: [10, 10],\n//   radius: 5,\n//   color: \"#00FF00\"\n// });\n// undefined\n// hello.draw(ctx)\n// undefined\n// hello.move(ctx)\n// undefined\n// hello.move(ctx)\n// undefined\n// hello.draw(ctx)\n// undefined\n// hello.draw(ctx)\n// undefined\n// hello.move(ctx)\n// undefined\n// hello.move(ctx)\n// undefined\n// hello.move(ctx)\n// undefined\n// hello.draw(ctx)\n// undefined\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });