/* eslint-disable no-restricted-syntax */
import Ship from './ship';

export default class Player {
  constructor(gameboard, player) {
    this.player = player;
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

  //   playTurn(coords) {

  //   }
}
