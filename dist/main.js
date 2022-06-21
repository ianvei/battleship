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

/***/ "./src/cpuDom.js":
/*!***********************!*\
  !*** ./src/cpuDom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CpuManipulateDom)\n/* harmony export */ });\n/* eslint-disable class-methods-use-this */\n/* eslint-disable prefer-destructuring */\n/* eslint-disable no-restricted-syntax */\nclass CpuManipulateDom {\n  constructor(playerGameBoard, enemyGameBoard, player) {\n    this.gameBoard = playerGameBoard;\n    this.enemyGameBoard = enemyGameBoard;\n    this.isVertical = false;\n    this.player = player;\n    this.generateGrid();\n    this.rotateToggle();\n    this.placedShipAmmount = 0;\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  generateGrid() {\n    const container = document.querySelector('.enemy-grid-cont');\n    container.classList.add('noClick');\n    for (const spotOnBoard of this.gameBoard.boardCoords) {\n      const gridCell = document.createElement('div');\n      gridCell.classList.add('cell');\n      gridCell.setAttribute('data-colums', spotOnBoard.x);\n      gridCell.setAttribute('data-rows', spotOnBoard.y);\n      gridCell.spotOnBoardObject = spotOnBoard;\n\n      gridCell.addEventListener('click', () => {\n        console.log(spotOnBoard);\n        this.gameBoard.registerHit([spotOnBoard.x, spotOnBoard.y], 'player');\n        gridCell.classList.add('noClick');\n        if (gridCell.spotOnBoardObject.hit) {\n          gridCell.innerText = '!';\n          gridCell.classList.add('occupied');\n        } else {\n          gridCell.innerText = 'X';\n        }\n        document.querySelector('.enemy-grid-cont').classList.toggle('noClick');\n        setTimeout(() => {\n          this.player.randomGuess();\n          this.checkEnemyDom();\n          console.log('Delayed for 1 second.');\n          document.querySelector('.enemy-grid-cont').classList.toggle('noClick');\n        }, '700');\n        // this.enemyGameBoard. //maybe pass this\n      });\n      container.appendChild(gridCell);\n    }\n    return container;\n  }\n\n  checkForShips(gridCell) {\n    if (gridCell.spotOnBoardObject.name) {\n      gridCell.classList.add('enemy-occupied');\n    }\n  }\n\n  checkDom() {\n    const grid = document.querySelector('.enemy-grid-cont');\n    for (let child = grid.firstChild; child !== null; child = child.nextSibling) {\n      if (child.spotOnBoardObject.name) {\n        child.classList.add('enemy-occupied');\n        child.classList.add('occupied');\n        // child.innerText = '!';\n      }\n      // if ((!child.spotOnBoardObject.guessable) && (!child.spotOnBoardObject.name)) {\n      //   child.classList.add('enemy-occupied');\n      //   child.innerText = 'X';\n      // }\n    }\n  }\n\n  checkEnemyDom() {\n    const grid = document.querySelector('.player-grid-cont');\n    for (let child = grid.firstChild; child !== null; child = child.nextSibling) {\n      if (child.spotOnBoardObject.hit) {\n        child.classList.add('enemy-occupied');\n        child.innerText = '!';\n      }\n      if ((!child.spotOnBoardObject.guessable) && (!child.spotOnBoardObject.name)) {\n        child.classList.add('enemy-occupied');\n        child.innerText = 'X';\n      }\n    }\n  }\n\n  rotateToggle() {\n    this.isVertical = !this.isVertical;\n    console.log(this.isVertical);\n  }\n\n  checkIfDonePlacing() {\n    // const grid = document.querySelector('.user-ships');\n    // const checkArray = [];\n    // for (let child = grid.firstChild; child !== null; child = child.nextSibling) {\n    //   if (child.disabled) {\n    //     this.placedShipAmmount += 1;\n    //     checkArray.push(true);\n    //   } else {\n    //     checkArray.push(false);\n    //   }\n    // }\n    // const checkArrayBool = checkArray.every(Boolean);\n    if (this.gameBoard.placedShipAmmount === 5) {\n      console.log('all done placing!');\n    }\n  }\n  //   placeShips(ship) {\n\n  //   }\n}\n\n\n//# sourceURL=webpack://battleship/./src/cpuDom.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ManipulateDom)\n/* harmony export */ });\n/* eslint-disable prefer-destructuring */\n/* eslint-disable class-methods-use-this */\n/* eslint-disable no-console */\n/* eslint-disable no-restricted-syntax */\n/* eslint-disable no-plusplus */\nclass ManipulateDom {\n  constructor(playerGameBoard, enemyGameBoard, player) {\n    this.gameBoard = playerGameBoard;\n    this.enemyGameBoard = enemyGameBoard;\n    this.isVertical = false;\n    this.player = player;\n    this.generateGrid();\n    this.assignShipButtons();\n    this.rotateToggle();\n    this.placeForMe();\n    // this.placedShipAmmount = 0;\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  generateGrid() {\n    const container = document.querySelector('.player-grid-cont');\n    for (const spotOnBoard of this.gameBoard.boardCoords) {\n      const gridCell = document.createElement('div');\n      gridCell.classList.add('cell');\n      gridCell.setAttribute('data-colums', spotOnBoard.x);\n      gridCell.setAttribute('data-rows', spotOnBoard.y);\n      gridCell.spotOnBoardObject = spotOnBoard;\n\n      gridCell.addEventListener('click', () => {\n        console.log(spotOnBoard);\n        if (!(this.gameBoard.currentSelectedShip === '')) {\n          this.gameBoard.placeShip(\n            [spotOnBoard.x, spotOnBoard.y],\n            this.gameBoard.currentSelectedShip,\n            this.isVertical,\n          );\n          // this.placedShipAmmount += 1;\n          this.checkDom();\n          this.checkIfDonePlacing();\n        }\n        // this.disablePlacement();\n      });\n      container.appendChild(gridCell);\n    }\n    return container;\n  }\n\n  checkForShips(gridCell) {\n    if (gridCell.spotOnBoardObject.name) {\n      gridCell.classList.add('occupied');\n    }\n  }\n\n  checkDom() {\n    const grid = document.querySelector('.player-grid-cont');\n    for (let child = grid.firstChild; child !== null; child = child.nextSibling) {\n      if (child.spotOnBoardObject.name) {\n        child.classList.add('occupied');\n        child.classList.add('noClick');\n        const shipButton = document.querySelector(`.${child.spotOnBoardObject.name}`);\n        shipButton.disabled = true;\n        // this.gameBoard.currentSelectedShip = '';\n      }\n    }\n  }\n\n  placeForMe() {\n    document.querySelector('.place-my-ships').addEventListener('click', () => {\n      this.player.placeAllShips();\n      this.checkDom();\n      document.querySelector('.enemy-grid-cont').classList.toggle('noClick');\n      document.querySelector('.place-my-ships').classList.toggle('noClick');\n      document.querySelector('.place-my-ships').disabled = true;\n      document.querySelector('.player-grid-cont').classList.toggle('noClick');\n    });\n  }\n\n  assignShipButtons() {\n    const carrier = document.querySelector('.carrier');\n    const battleship = document.querySelector('.battleship');\n    const cruiser = document.querySelector('.cruiser');\n    const submarine = document.querySelector('.submarine');\n    const destroyer = document.querySelector('.destroyer');\n\n    carrier.shipObject = this.player.currentShips[0];\n    carrier.addEventListener('click', () => {\n      console.log(carrier.shipObject);\n      this.gameBoard.currentSelectedShip = carrier.shipObject;\n      console.log(this.gameBoard);\n      document.querySelector('.place-my-ships').classList.toggle('noClick');\n      document.querySelector('.place-my-ships').disabled = true;\n    });\n\n    battleship.shipObject = this.player.currentShips[1];\n    battleship.addEventListener('click', () => {\n      console.log(battleship.shipObject);\n      this.gameBoard.currentSelectedShip = battleship.shipObject;\n      console.log(this.gameBoard);\n      document.querySelector('.place-my-ships').classList.toggle('noClick');\n      document.querySelector('.place-my-ships').disabled = true;\n    });\n\n    cruiser.shipObject = this.player.currentShips[2];\n    cruiser.addEventListener('click', () => {\n      console.log(cruiser.shipObject);\n      this.gameBoard.currentSelectedShip = cruiser.shipObject;\n      console.log(this.gameBoard);\n      document.querySelector('.place-my-ships').classList.toggle('noClick');\n      document.querySelector('.place-my-ships').disabled = true;\n    });\n\n    submarine.shipObject = this.player.currentShips[3];\n    submarine.addEventListener('click', () => {\n      console.log(submarine.shipObject);\n      this.gameBoard.currentSelectedShip = submarine.shipObject;\n      console.log(this.gameBoard);\n      document.querySelector('.place-my-ships').classList.toggle('noClick');\n      document.querySelector('.place-my-ships').disabled = true;\n    });\n\n    destroyer.shipObject = this.player.currentShips[4];\n    destroyer.addEventListener('click', () => {\n      console.log(destroyer.shipObject);\n      this.gameBoard.currentSelectedShip = destroyer.shipObject;\n      console.log(this.gameBoard);\n      document.querySelector('.place-my-ships').classList.toggle('noClick');\n      document.querySelector('.place-my-ships').disabled = true;\n    });\n  }\n\n  rotateToggle() {\n    const rotateButton = document.querySelector('.rotate-toggle');\n    rotateButton.addEventListener('click', () => {\n      this.isVertical = !this.isVertical;\n      console.log(this.isVertical);\n    });\n  }\n\n  checkIfDonePlacing() {\n    // const grid = document.querySelector('.user-ships');\n    // const checkArray = [];\n    // for (let child = grid.firstChild; child !== null; child = child.nextSibling) {\n    //   if (child.disabled) {\n    //     this.placedShipAmmount += 1;\n    //     checkArray.push(true);\n    //   } else {\n    //     checkArray.push(false);\n    //   }\n    // }\n    // const checkArrayBool = checkArray.every(Boolean);\n    if (this.gameBoard.placedShipAmmount === 5) {\n      console.log('its all true!');\n      document.querySelector('.player-grid-cont').classList.add('noClick');\n      document.querySelector('.enemy-grid-cont').classList.toggle('noClick');\n    } else {\n      console.log('no flase in check');\n    }\n    console.log(`PLACED SHIP AMOUNT: ${this.gameBoard.placedShipAmmount}`);\n  }\n  //   placeShips(ship) {\n\n  //   }\n}\n\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* eslint-disable class-methods-use-this */\n/* eslint-disable no-restricted-syntax */\n/* eslint-disable prefer-destructuring */\n/* eslint-disable no-param-reassign */\n/* eslint-disable no-console */\n/* eslint-disable no-plusplus */\n// import Ship from \"./ship\";\n\nclass GameBoard {\n  constructor(name) {\n    this.boardCoords = [];\n    this.init();\n    this.sunkShips = [];\n    this.placing = true;\n    this.currentSelectedShip = '';\n    this.placedShipAmmount = 0;\n    this.placed = false;\n    this.name = name;\n    this.succesfullRandom = false;\n    this.tempCount = 0;\n    this.winFlag = false;\n    // this.domObject = domObject;\n  }\n\n  init() {\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        const boardSpot = {};\n        boardSpot.x = j;\n        boardSpot.y = i;\n        boardSpot.hit = false;\n        boardSpot.name = '';\n        boardSpot.shipObject = {};\n        boardSpot.guessable = true;\n        boardSpot.occupied = false;\n        this.boardCoords.push(boardSpot);\n      }\n    }\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  placeShip(coordinates, ship, isVertical) {\n    this.placed = false;\n    console.log(ship.length);\n    let colSpan;\n    let startingCoordinate;\n    if (isVertical) {\n      colSpan = coordinates[1] + ship.length;\n      startingCoordinate = coordinates[1];\n    } else {\n      colSpan = coordinates[0] + ship.length;\n      startingCoordinate = coordinates[0];\n    }\n    console.log(colSpan);\n    const shipPositionArray = [];\n\n    for (let i = startingCoordinate; i < colSpan; i++) {\n      const shipOccupies = {};\n      if (isVertical) {\n        shipOccupies.x = coordinates[0];\n        shipOccupies.y = i;\n      } else {\n        shipOccupies.x = i;\n        shipOccupies.y = coordinates[1];\n      }\n      shipPositionArray.push(shipOccupies);\n    }\n\n    const valuesArray = [];\n    const validSpots = [];\n    for (const shipCurrentPosition of shipPositionArray) {\n      for (const spotOnBoard of this.boardCoords) {\n        if ((shipCurrentPosition.x === spotOnBoard.x)\n        && (shipCurrentPosition.y === spotOnBoard.y)) {\n          if (spotOnBoard.occupied) {\n            valuesArray.push(false);\n            break; // if spot is occupied, simply don't let it happen\n          }\n          if (colSpan > 10) {\n            console.log('not is vert');\n            valuesArray.push(false);\n            break;\n          }\n          validSpots.push(spotOnBoard);\n          valuesArray.push(true);\n        }\n      }\n      console.log(valuesArray);\n    }\n\n    const result = valuesArray.every(Boolean); // check if every value is okay before occupying\n    if (result) {\n      console.log('ITS ALL GOOD');\n      console.log(valuesArray);\n      console.log(shipPositionArray);\n      for (const spotOnBoard of validSpots) {\n        spotOnBoard.name = ship.name;\n        spotOnBoard.occupied = true;\n        spotOnBoard.shipObject = ship;\n        console.log(spotOnBoard.name);\n      }\n      this.placedShipAmmount += 1;\n      this.placed = true;\n      this.currentSelectedShip = '';\n      this.succesfullRandom = true;\n    } else {\n      console.log('NOT GOOD');\n      console.log(valuesArray);\n    }\n  }\n\n  registerHit(coords, name) {\n    this.tempCount = 0;\n    console.log(`TESTING THE HIT: ${name}`);\n    for (const spotOnBoard of this.boardCoords) {\n      if ((coords[0] === spotOnBoard.x) && (coords[1] === spotOnBoard.y)) {\n        if (spotOnBoard.guessable && (!spotOnBoard.hit)) {\n          if (spotOnBoard.name && spotOnBoard.occupied) {\n            spotOnBoard.hit = true;\n            spotOnBoard.guessable = false;\n            spotOnBoard.shipObject.hit();\n            if (spotOnBoard.shipObject.isSunk()) { // check if ship is sunk, if so log console\n              console.log('im sunk!');\n              this.sunkShips.push('X');\n              console.log(this.sunkShips);\n              if (this.sunkShips.length >= 5) {\n                if (this.name === 'computer') {\n                  console.log('Congrats player you win!');\n                  document.querySelector('.win').innerText = `${name} wins!`;\n                  this.winFlag = true;\n                } else if (this.name === 'player') {\n                  console.log(`Congrats ${name} you win!`);\n                  document.querySelector('.win').innerText = `${name} wins!`;\n                  this.winFlag = true;\n                }\n              }\n            }\n            this.tempCount += 1;\n          } else {\n            this.tempCount += 1; // a hit, but not on a ship.\n          }\n        } else {\n          console.log('already guessed here!'); // if not guessable\n          // this.registerHit(coords);\n          // break;\n          // this.succesfullRandom = false;\n        }\n        console.log('NOT GUESSABLE ANYMORE');\n        // spotOnBoard.\n        spotOnBoard.guessable = false; // not guessable regardless of hit\n      }\n    }\n  }\n\n  checkWin() {\n    if (this.sunkShips.length >= 5) {\n      console.log('winner!');\n    }\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _cpuDom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cpuDom */ \"./src/cpuDom.js\");\n/* eslint-disable max-len */\n/* eslint-disable no-console */\n\n\n\n\n\n\n// could go in game loop object, just want to test for now.\nconst shipStartingArray = [\n  { name: 'carrier', length: 5 },\n  { name: 'battleship', length: 4 },\n  { name: 'cruiser', length: 3 },\n  { name: 'submarine', length: 3 },\n  { name: 'destroyer', length: 2 },\n];\n\nconst testBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('player');\n\nconst cpuBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('computer');\nconst testPlayer = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](testBoard, cpuBoard, 'player');\n\ntestPlayer.generateCurrentShips();\n\nconst testCpu = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](cpuBoard, testBoard, 'cpu');\n// console.log(testCpu);\n// console.log(testCpu.randomGuess());\n\nconst domManipulator = new _dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"](testBoard, cpuBoard, testPlayer);\nconst cpuDomManipulator = new _cpuDom__WEBPACK_IMPORTED_MODULE_4__[\"default\"](cpuBoard, testBoard, testCpu);\n// domManipulator.\n\ntestCpu.generateCurrentShips();\ntestCpu.placeAllShips();\nconsole.log('wtf');\ncpuDomManipulator.checkDom();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* eslint-disable no-console */\n/* eslint-disable max-len */\n/* eslint-disable consistent-return */\n/* eslint-disable no-restricted-syntax */\n\n\nclass Player {\n  constructor(gameboard, enemyBoard, playerName) {\n    this.playerName = playerName;\n    this.enemyBoard = enemyBoard;\n    this.gameboard = gameboard;\n    this.succesfullRandom = false;\n    this.startingShips = [\n      { name: 'carrier', length: 5 },\n      { name: 'battleship', length: 4 },\n      { name: 'cruiser', length: 3 },\n      { name: 'submarine', length: 3 },\n      { name: 'destroyer', length: 2 },\n    ];\n    this.currentShips = [];\n  }\n\n  generateCurrentShips() {\n    for (const ship of this.startingShips) {\n      const newShip = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ship.length, ship.name, [1, 3]);\n      this.currentShips.push(newShip);\n    }\n  }\n\n  randomGuess() {\n    if (this.playerName === 'cpu') {\n      do {\n        const xRandom = Math.floor(Math.random() * 10);\n        const yRandom = Math.floor(Math.random() * 10);\n        this.enemyBoard.registerHit([xRandom, yRandom], 'cpu');\n      } while (this.enemyBoard.tempCount < 1);\n    }\n  }\n\n  placeAllShips() {\n    for (const ship of this.currentShips) {\n      do {\n        let isVertical;\n        const xRandom = Math.floor(Math.random() * 10);\n        const yRandom = Math.floor(Math.random() * 10);\n        if (Math.round(Math.random())) {\n          isVertical = true;\n        } else {\n          isVertical = false;\n        }\n        this.gameboard.placeShip([xRandom, yRandom], ship, isVertical);\n      } while (!this.gameboard.placed);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length, name, coords) {\n    this.length = length;\n    this.name = name;\n    this.sunk = false;\n    this.hits = [];\n    // this.isVertical = isVertical\n    this.coordinates = [coords[0], coords[1]];\n  }\n\n  hit() {\n    console.log('IM HIT');\n    this.hits.push('X');\n  }\n\n  isSunk() {\n    if (this.length === this.hits.length) {\n      return true;\n    }\n    return false;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

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