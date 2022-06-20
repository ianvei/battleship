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
      const xRandom = Math.floor(Math.random() * 10);
      const yRandom = Math.floor(Math.random() * 10);
      console.log(`FROM RANDOM ${[xRandom, yRandom]}`);
      for (const boardSpot of this.enemyBoard.boardCoords) {
        if (((boardSpot.x === xRandom) && (boardSpot.y === yRandom))) {
          if (boardSpot.hit) {
            // console.log('From random - cant guess here!');
            this.randomGuess();
          } else if (!boardSpot.hit) {
            this.enemyBoard.registerHit([xRandom, yRandom]);
            // return [xRandom, yRandom];
          }
        }
      }
    }
  }

  placeAllShips() {
    for (const ship of this.currentShips) {
      // console.log('erm');
      // console.log(ship);
      // while (this.gameboard.placed) {
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
        // console.log([xRandom, yRandom]);
      } while (!this.gameboard.placed);

      // }

      // while (this.gameboard.placedShipAmount < 4) {
      // }
    }
    // console.log(this.gameboard);
  }
  //   playTurn(coords) {

  //   }
}
