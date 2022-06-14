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
    // [{x: 0, y:0, hit: false}]
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
    //   for(let boardCell of this.boardCoords){
    //       if((boardCell.x === coordinates[0]) && (boardCell.y === coordinates[1])){
    //           boardCell.name = ship.name;
    //       }
    //   }

    // add length to the x coordinate if not is vertical to determine range of impacted cells
    this.boardCoords.forEach((boardCell) => {
      if ((boardCell.x === coordinates[0]) && (boardCell.y === coordinates[1])) {
        boardCell.name = ship.name;
      }
    });

    console.log(coordinates);
    console.log(ship);
    console.log(isVertical)
  }

  //   registerHit(){};

  // in main loop: GameBoard.placeShip(currentShip)
  //      current ship can be global variable in index.js - mock ships being chosen
}
