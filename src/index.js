/* eslint-disable max-len */
/* eslint-disable no-console */
import GameBoard from './gameBoard';
import Player from './player';
import ManipulateDom from './dom';
import CpuManipulateDom from './cpuDom';

const testBoard = new GameBoard('player');

const cpuBoard = new GameBoard('computer');
const testPlayer = new Player(testBoard, cpuBoard, 'player');

testPlayer.generateCurrentShips();

const testCpu = new Player(cpuBoard, testBoard, 'cpu');

const domManipulator = new ManipulateDom(testBoard, cpuBoard, testPlayer);
const cpuDomManipulator = new CpuManipulateDom(cpuBoard, testBoard, testCpu);

testCpu.generateCurrentShips();
testCpu.placeAllShips();
cpuDomManipulator.checkDom();
