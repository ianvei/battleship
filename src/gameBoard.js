/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
export default class GameBoard {
  constructor() {
    this.boardCoords = [];
    this.init();
    this.playerOneShips = [];
    this.computerShips = [];
  }

  init() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const boardSpot = {};
        boardSpot.x = i;
        boardSpot.y = j;
        boardSpot.hit = false;
        boardSpot.name = '';
        boardSpot.guessable = true;
        boardSpot.occupied = false;
        this.boardCoords.push(boardSpot);
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  placeShip(coordinates, ship, isVertical) {
    console.log(ship.length);
    let colSpan;
    let startingCoordinate;
    if (isVertical) {
      colSpan = coordinates[1] + ship.length;
      startingCoordinate = coordinates[1];
    } else {
      colSpan = coordinates[0] + ship.length;
      startingCoordinate = coordinates[0];
    }
    console.log(colSpan);
    const shipPositionArray = [];

    for (let i = startingCoordinate; i < colSpan; i++) {
      const shipOccupies = {};
      if (isVertical) {
        shipOccupies.x = coordinates[0];
        shipOccupies.y = i;
      } else {
        shipOccupies.x = i;
        shipOccupies.y = coordinates[1];
      }
      shipPositionArray.push(shipOccupies);
    }
    // if having issues check if const vs let messes things up
    for (const shipCurrentPosition of shipPositionArray) {
      for (const spotOnBoard of this.boardCoords) {
        if ((shipCurrentPosition.x === spotOnBoard.x)
        && (shipCurrentPosition.y === spotOnBoard.y)) {
          spotOnBoard.name = ship.name;
          spotOnBoard.occupied = true;
          console.log(spotOnBoard.name);
        }
      }
    }
  }

  //   registerHit(){};

  // in main loop: GameBoard.placeShip(currentShip)
  //      current ship can be global variable in index.js - mock ships being chosen
}
