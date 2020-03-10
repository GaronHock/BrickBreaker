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

eval("// import MovingObject from './movingObject';\n// console.log(\"Webpack is working!\")\n// window.MovingObject = MovingObject;\n\ndocument.addEventListener(\"DOMContentLoaded\", ()=>{\n  const FPS = 30; ///FRAMES PER SECOND\n  let ballSize = 30;\n  let ballX\n  let ballY;\n  let ballXVelocity\n  let ballYVelocity;\n  let canvas;\n  let context;\n  debugger;\n  canvas = document.getElementById(\"my-canvas\");\n  context = canvas.getContext(\"2d\");\n\n\n  ///SET UP GAME LOOP CALLS IT EVERY THIRTIETH OF A SECOND\n  setInterval(update, 1000 / FPS) /// takes handler and TIMEOUT --- how often it calls it\n\n  //SET THE BALL STARTING POSITION\n\n  ballX = canvas.width / 2;\n  ballY = canvas.height / 2;\n\n\n\n  ballXVelocity = Math.floor(Math.random() * 76 + 25) / FPS; ///Math.random creates a value between zero and one\n  ballYVelocity = Math.floor(Math.random() * 76 + 25) / FPS;\n\n  //random ball direction\n  if (Math.floor(Math.random() * 2) == 0) {\n    ballXVelocity = -ballXVelocity;\n  }\n  if (Math.floor(Math.random() * 2) == 0) {\n    ballYVelocity = -ballYVelocity;\n  }\n\n  ///UPDATE FUNCTION\n  function update() {\n    //move the ball\n    ballX += ballXVelocity;\n    ballY += ballYVelocity;\n    context.fillStyle = \"black\";\n    context.fillRect(0, 0, canvas.width, canvas.height);\n    context.fillStyle = \"yellow\";\n    context.fillRect(ballX - ballSize / 2, ballY - ballSize / 2, ballSize, ballSize);\n    if (ballX - ballSize / 2 < 0 && ballXVelocity < 0) {\n      ballXVelocity = -ballXVelocity;\n    }\n    if (ballX + ballSize / 2 > canvas.width && ballXVelocity > 0) {\n      ballXVelocity = -ballXVelocity;\n    }\n    if (ballY - ballSize / 2 < 0 && ballYVelocity < 0) {\n      ballYVelocity = -ballYVelocity;\n    }\n    if (ballY + ballSize / 2 > canvas.height && ballYVelocity > 0) {\n      ballYVelocity = -ballYVelocity;\n    }\n\n  }\n })\n\n\n\n\n\n\n\n\n\n\n\n\n///DRAWTING ON WINDOW STEPS BELOW \n\n// undefined\n// const ctx = canvasEl.getContext(\"2d\")\n// undefined\n// hello.draw(ctx)\n// VM3875: 1 Uncaught ReferenceError: hello is not defined\n// at<anonymous>: 1: 1\n//   (anonymous) @VM3875: 1\n// const hello = new MovingObject({\n//   pos: [30, 30],\n//   vel: [10, 10],\n//   radius: 5,\n//   color: \"#00FF00\"\n// });\n// undefined\n// hello.draw(ctx)\n// undefined\n// hello.move(ctx)\n// undefined\n// hello.move(ctx)\n// undefined\n// hello.draw(ctx)\n// undefined\n// hello.draw(ctx)\n// undefined\n// hello.move(ctx)\n// undefined\n// hello.move(ctx)\n// undefined\n// hello.move(ctx)\n// undefined\n// hello.draw(ctx)\n// undefined\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });