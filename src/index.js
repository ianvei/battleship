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

const testBoard = new GameBoard();

const cpuBoard = new GameBoard();
const testPlayer = new Player(testBoard, cpuBoard, 'player');

testPlayer.generateCurrentShips();

const testCpu = new Player(cpuBoard, testBoard, 'cpu');
// console.log(testCpu);
// console.log(testCpu.randomGuess());

const domManipulator = new ManipulateDom(testBoard, cpuBoard, testPlayer);
const cpuDomManipulator = new CpuManipulateDom(cpuBoard, testBoard, testCpu);
// domManipulator.

testCpu.generateCurrentShips();
testCpu.placeAllShips();
console.log('wtf');
cpuDomManipulator.checkDom();