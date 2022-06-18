/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
export default class ManipulateDom {
  constructor(playerGameBoard, enemyGameBoard, player) {
    this.gameBoard = playerGameBoard;
    this.enemyGameBoard = enemyGameBoard;
    this.isVertical = true;
    this.player = player;
    this.generateGrid();
    this.assignShipButtons();
  }

  // eslint-disable-next-line class-methods-use-this
  generateGrid() {
    const container = document.querySelector('.player-grid-cont');
    for (const spotOnBoard of this.gameBoard.boardCoords) {
      const gridCell = document.createElement('div');
      gridCell.classList.add('cell');
      gridCell.setAttribute('data-colums', spotOnBoard.x);
      gridCell.setAttribute('data-rows', spotOnBoard.y);
      gridCell.spotOnBoardObject = spotOnBoard;
      //   gridCell.addEventListener('click', () => {
      //     for (const gridCell of container) {
      //       console.log(gridCell);
      //     }
      //   });
      gridCell.addEventListener('click', () => {
        console.log(spotOnBoard);
        // this.gameBoard.registerHit([this.gameBoard.boardCoords.x, this.gameBoard.boardCoords.y]);
        this.gameBoard.placeShip(
          [spotOnBoard.x, spotOnBoard.y],
          this.gameBoard.currentSelectedShip,
          this.isVertical,
        );
        this.checkDom();
        // if (!(this.isVertical)) {
        //   for (let i = 0; i < this.gameBoard.currentSelectedShip.length; i++) {
        //     this.checkForShips(gridCell);
        //   }
        // }
      });
      container.appendChild(gridCell);
    }

    // for (let i = 0; i < 16; i++) {
    //   const row = document.createElement('div');
    //   row.className = 'row';
    //   row.id = `row${i}`;

    //   for (let j = 0; j < 16; j++) {
    //     const box = document.createElement('div');
    //     box.className = 'box';
    //     row.appendChild(box);
    //   }

    //   container.appendChild(row);
    // }

    return container;
  }

  checkForShips(gridCell) {
    if (gridCell.spotOnBoardObject.name) {
      gridCell.classList.add('occupied');
    }
  }

  checkDom() {
    const grid = document.querySelector('.player-grid-cont');
    for (let child = grid.firstChild; child !== null; child = child.nextSibling) {
      if (child.spotOnBoardObject.name) {
        child.classList.add('occupied');
      }
    }
  }

  assignShipButtons() {
    const carrier = document.querySelector('.carrier');
    const battleship = document.querySelector('.battleship');
    const cruiser = document.querySelector('.cruiser');
    const submarine = document.querySelector('.submarine');
    const destroyer = document.querySelector('.destroyer');

    carrier.shipObject = this.player.currentShips[0];
    carrier.addEventListener('click', () => {
      console.log(carrier.shipObject);
      this.gameBoard.currentSelectedShip = carrier.shipObject;
      console.log(this.gameBoard);
    });

    battleship.shipObject = this.player.currentShips[1];
    battleship.addEventListener('click', () => {
      console.log(battleship.shipObject);
      this.gameBoard.currentSelectedShip = battleship.shipObject;
      console.log(this.gameBoard);
    });

    cruiser.shipObject = this.player.currentShips[2];
    cruiser.addEventListener('click', () => {
      console.log(cruiser.shipObject);
      this.gameBoard.currentSelectedShip = cruiser.shipObject;
      console.log(this.gameBoard);
    });

    submarine.shipObject = this.player.currentShips[3];
    submarine.addEventListener('click', () => {
      console.log(submarine.shipObject);
      this.gameBoard.currentSelectedShip = submarine.shipObject;
      console.log(this.gameBoard);
    });

    destroyer.shipObject = this.player.currentShips[4];
    destroyer.addEventListener('click', () => {
      console.log(destroyer.shipObject);
      this.gameBoard.currentSelectedShip = destroyer.shipObject;
      console.log(this.gameBoard);
    });
  }
  //   placeShips(ship) {

  //   }
}
