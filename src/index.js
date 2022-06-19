/* eslint-disable max-len */
/* eslint-disable no-console */
import Ship from './ship';
import GameBoard from './gameBoard';
import Player from './player';
import ManipulateDom from './dom';
import CpuManipulateDom from './cpuDom';

// could go in game loop object, just want to test for now.
const shipStartingArray = [
  { name: 'carrier', length: 5 },
  { name: 'battleship', length: 4 },
  { name: 'cruiser', length: 3 },
  { name: 'submarine', length: 3 },
  { name: 'destroyer', length: 2 },
];

// in fact, this could probably go in player
// eslint-disable-next-line no-restricted-syntax
// for (const ship of shipStartingArray) {
//   const newShip = new Ship(ship.length, ship.name, [1, 3]);
//   newShip.hit(0);
//   console.log(newShip);
// }

const testBoard = new GameBoard();
// console.log(playerOneBoard);
// console.log(testBoard);

// there is an error with the lengths, figure out
// const shipToPlace = new Ship(shipStartingArray[1].length, shipStartingArray[1].name, [3, 4]);
// const secondShipToPlace = new Ship(shipStartingArray[3].length, shipStartingArray[3].name, [1, 2]);
// const thirdShipToPlace = new Ship(shipStartingArray[0].length, shipStartingArray[0].name, [6, 7]);

// testBoard.placeShip([3, 4], shipToPlace, true);

// testBoard.placeShip([1, 2], secondShipToPlace, false);

// testBoard.placeShip([5, 7], thirdShipToPlace, false);
// testBoard.registerHit([5, 7]);
// testBoard.registerHit([9, 7]);
// testBoard.registerHit([9, 7]);
// testBoard.registerHit([6, 7]);
// testBoard.registerHit([6, 8]);
// testBoard.registerHit([7, 7]);
// testBoard.registerHit([8, 7]);

// console.log(testBoard);
const cpuBoard = new GameBoard();
const testPlayer = new Player(testBoard, cpuBoard, 'player');

testPlayer.generateCurrentShips();

const testCpu = new Player(cpuBoard, testBoard, 'cpu');
// console.log(testCpu);
// console.log(testCpu.randomGuess());
console.log(testPlayer);

const domManipulator = new ManipulateDom(testBoard, cpuBoard, testPlayer);
const cpuDomManipulator = new CpuManipulateDom(cpuBoard, testBoard, testCpu);
// domManipulator.
testCpu.placeAllShips();
