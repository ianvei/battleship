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
    let colSpan;
    let startingCoordinate;
    if (isVertical) {
      colSpan = coordinates[1] + ship.length;
      startingCoordinate = coordinates[1];
    } else {
      colSpan = coordinates[0] + ship.length;
      startingCoordinate = coordinates[0];
    }
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
            valuesArray.push(false);
            break;
          }
          validSpots.push(spotOnBoard);
          valuesArray.push(true);
        }
      }
    }

    const result = valuesArray.every(Boolean); // check if every value is okay before occupying
    if (result) {
      for (const spotOnBoard of validSpots) {
        spotOnBoard.name = ship.name;
        spotOnBoard.occupied = true;
        spotOnBoard.shipObject = ship;
      }
      this.placedShipAmmount += 1;
      this.placed = true;
      this.currentSelectedShip = '';
      this.succesfullRandom = true;
    }
  }

  registerHit(coords, name) {
    this.tempCount = 0;
    for (const spotOnBoard of this.boardCoords) {
      if ((coords[0] === spotOnBoard.x) && (coords[1] === spotOnBoard.y)) {
        if (spotOnBoard.guessable && (!spotOnBoard.hit)) {
          if (spotOnBoard.name && spotOnBoard.occupied) {
            spotOnBoard.hit = true;
            if (name === 'computer') {
              document.querySelector('.smile-cont > img').src = 'images/sad.png';
            } else {
              document.querySelector('.smile-cont > img').src = 'images/smile.png';
            }
            spotOnBoard.guessable = false;
            spotOnBoard.shipObject.hit();
            if (spotOnBoard.shipObject.isSunk()) { // check if ship is sunk
              this.sunkShips.push('X');
              if (this.sunkShips.length >= 5) {
                if (name === 'computer') {
                  document.querySelector('.win').innerText = `${name} wins!`;
                  document.querySelector('.win-main > p').innerText = 'Sorry player, you lose! Refresh to play again.';
                  document.querySelector('.win-popup').style.display = 'flex';
                  this.winFlag = true;
                } else if (name === 'player') {
                  document.querySelector('.win-main > p').innerText = `Congratulations ${name}, you win! Refresh to play again.`;
                  document.querySelector('.win-popup').style.display = 'flex';
                  this.winFlag = true;
                }
              }
            }
            this.tempCount += 1;
          } else {
            this.tempCount += 1; // a hit, but not on a ship.
            if (name === 'player') {
              document.querySelector('.smile-cont > img').src = 'images/neutral.png';
            }
          }
        } else {
          console.log('already guessed here!'); // if not guessable
          if (name === 'player') {
            document.querySelector('.smile-cont > img').src = 'images/neutral.png';
          }
          // this.registerHit(coords);
          // break;
          // this.succesfullRandom = false;
        }
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
