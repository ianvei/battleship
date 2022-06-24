/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
import Ship from './ship';

export default class Player {
  constructor(gameboard, enemyBoard, playerName) {
    this.playerName = playerName;
    this.enemyBoard = enemyBoard;
    this.gameboard = gameboard;
    this.succesfullRandom = false;
    this.startingShips = [
      { name: 'carrier', length: 5 },
      { name: 'battleship', length: 4 },
      { name: 'cruiser', length: 3 },
      { name: 'submarine', length: 3 },
      { name: 'destroyer', length: 2 },
    ];
    this.currentShips = [];
  }

  generateCurrentShips() {
    for (const ship of this.startingShips) {
      const newShip = new Ship(ship.length, ship.name, [1, 3]);
      this.currentShips.push(newShip);
    }
  }

  randomGuess() {
    if (this.playerName === 'cpu') {
      do {
        const xRandom = Math.floor(Math.random() * 10);
        const yRandom = Math.floor(Math.random() * 10);
        this.enemyBoard.registerHit([xRandom, yRandom], 'computer');
      } while (this.enemyBoard.tempCount < 1);
    }
  }

  placeAllShips() {
    for (const ship of this.currentShips) {
      do {
        let isVertical;
        const xRandom = Math.floor(Math.random() * 10);
        const yRandom = Math.floor(Math.random() * 10);
        if (Math.round(Math.random())) {
          isVertical = true;
        } else {
          isVertical = false;
        }
        this.gameboard.placeShip([xRandom, yRandom], ship, isVertical);
      } while (!this.gameboard.placed);
    }
  }
}
