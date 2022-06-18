/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
// import Ship from "./ship";

export default class GameBoard {
  constructor() {
    this.boardCoords = [];
    this.init();
    this.sunkShips = [];
    this.placing = true;
    this.currentSelectedShip = '';
  }

  init() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const boardSpot = {};
        boardSpot.x = j;
        boardSpot.y = i;
        boardSpot.hit = false;
        boardSpot.name = '';
        boardSpot.shipObject = {};
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

    const valuesArray = [];
    const validSpots = [];
    for (const shipCurrentPosition of shipPositionArray) {
      for (const spotOnBoard of this.boardCoords) {
        if ((shipCurrentPosition.x === spotOnBoard.x)
        && (shipCurrentPosition.y === spotOnBoard.y)) {
          if (spotOnBoard.occupied) {
            valuesArray.push(false);
            break; // if spot is occupied, simply don't let it happen
          }
          if (colSpan > 10) {
            console.log('not is vert');
            valuesArray.push(false);
            break;
          }
          validSpots.push(spotOnBoard);
          valuesArray.push(true);
        }
      }
      console.log(valuesArray);
    }

    const result = valuesArray.every(Boolean); // check if every value is okay before occupying
    if (result) {
      console.log('ITS ALL GOOD');
      console.log(valuesArray);
      console.log(shipPositionArray);
      for (const spotOnBoard of validSpots) {
        spotOnBoard.name = ship.name;
        spotOnBoard.occupied = true;
        spotOnBoard.shipObject = ship;
        console.log(spotOnBoard.name);
      }
    } else {
      console.log("NOT GOOD");
      console.log(valuesArray);
    }
  }

  registerHit(coords) {
    for (const spotOnBoard of this.boardCoords) {
      if ((coords[0] === spotOnBoard.x) && (coords[1] === spotOnBoard.y)) {
        if (spotOnBoard.guessable) {
          if (spotOnBoard.name && spotOnBoard.occupied) {
            spotOnBoard.hit = true;
            spotOnBoard.shipObject.hit();
            if (spotOnBoard.shipObject.isSunk()) { // check if ship is sunk, if so log console
              console.log('im sunk!');
              this.sunkShips.push('X');
            }
          }
        } else {
          console.log('already guessed here!'); // if not guessable
        }
        spotOnBoard.guessable = false; // not guessable regardless of hit
      }
    }
  }

  checkWin() {
    if (this.sunkShips.length >= 5) {
      console.log('winner!');
    }
  }
}
