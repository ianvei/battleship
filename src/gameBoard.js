/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
// import Ship from "./ship";

export default class GameBoard {
  constructor(name) {
    this.boardCoords = [];
    this.init();
    this.sunkShips = [];
    this.placing = true;
    this.currentSelectedShip = '';
    this.placedShipAmmount = 0;
    this.placed = false;
    this.name = name;
    this.succesfullRandom = false;
    this.tempCount = 0;
    this.winFlag = false;
    // this.domObject = domObject;
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
    this.placed = false;
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
      this.placedShipAmmount += 1;
      this.placed = true;
      this.currentSelectedShip = '';
      this.succesfullRandom = true;
    } else {
      console.log('NOT GOOD');
      console.log(valuesArray);
    }
  }

  registerHit(coords, name) {
    this.tempCount = 0;
    console.log(`TESTING THE HIT: ${name}`);
    for (const spotOnBoard of this.boardCoords) {
      if ((coords[0] === spotOnBoard.x) && (coords[1] === spotOnBoard.y)) {
        if (spotOnBoard.guessable && (!spotOnBoard.hit)) {
          if (spotOnBoard.name && spotOnBoard.occupied) {
            spotOnBoard.hit = true;
            spotOnBoard.guessable = false;
            spotOnBoard.shipObject.hit();
            if (spotOnBoard.shipObject.isSunk()) { // check if ship is sunk, if so log console
              console.log('im sunk!');
              this.sunkShips.push('X');
              console.log(this.sunkShips);
              if (this.sunkShips.length >= 5) {
                if (this.name === 'computer') {
                  console.log('Congrats player you win!');
                  document.querySelector('.win').innerText = `${name} wins!`;
                  this.winFlag = true;
                } else if (this.name === 'player') {
                  console.log(`Congrats ${name} you win!`);
                  document.querySelector('.win').innerText = `${name} wins!`;
                  this.winFlag = true;
                }
              }
            }
            this.tempCount += 1;
          } else {
            this.tempCount += 1; // a hit, but not on a ship.
          }
        } else {
          console.log('already guessed here!'); // if not guessable
          // this.registerHit(coords);
          // break;
          // this.succesfullRandom = false;
        }
        console.log('NOT GUESSABLE ANYMORE');
        // spotOnBoard.
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
