/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameBoard\": () => (/* binding */ GameBoard)\n/* harmony export */ });\nclass GameBoard{\n    constructor(){\n        this.boardCoords = []\n        this.init()\n    }\n\n    init(){\n        // [{x: 0, y:0, hit: false}]\n        for(let i = 0; i < 10; i++){\n            let boardSpot = {}\n            boardSpot['hit'] = false\n            boardSpot['x'] = i \n            for(let j=0; j < 10; j++){\n                console.log(j)\n                \n                boardSpot['y'] = j\n                this.boardCoords.push(boardSpot)\n                \n                console.log(boardSpot)\n                \n                \n            }\n            \n            \n        }\n\n    }\n\n\n\n\n    // in main loop: GameBoard.placeShip(currentShip) \n    //      current ship can be global variable in index.js - mock ships being chosen\n}\n\n//# sourceURL=webpack://battleship/./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n\n\n\n\n// could go in game loop object, just want to test for now.\nlet shipStartingArray = [\n    {name: \"carrier\", length: 5},\n    {name: \"battleship\", length: 4},\n    {name: \"cruiser\", length: 3},\n    {name: \"submarine\", length: 3},\n    {name: \"destroyer\", length: 2},\n]\n\n// in fact, this could probably go in player \nfor (let ship of shipStartingArray){\n    let newShip = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(ship.length, ship.name, [1,3])\n    newShip.hit(0)\n    console.log(newShip)\n}\n\nlet testBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_1__.GameBoard\nconsole.log(testBoard)\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship{\n    constructor(length, name, coords){\n        this.length = length\n        this.name = name\n        this.sunk = false \n        this.hits = []\n        // this.isVertical = isVertical\n        this.coordinates = [coords[0], coords[1]]\n    }\n  \n    hit(){\n        return this.hits.push('X')\n    }\n\n    isSunk(){\n        if (this.length === this.hits.length){\n            this.sunk = true\n        }\n        return;\n    }\n    // if Ship.isVertical or something in the gameboard -  position = [x, y + length]\n    // if !Ship.isVertical - position = [x + length, y]\n    // we don't actually need to know the position of the hit, we just need to know that a \n    //  hit was succesfull, and if the length of hits = positions it is correct\n}\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;