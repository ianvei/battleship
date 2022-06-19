/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
export default class ManipulateDom {
  constructor(playerGameBoard, enemyGameBoard, player) {
    this.gameBoard = playerGameBoard;
    this.enemyGameBoard = enemyGameBoard;
    this.isVertical = false;
    this.player = player;
    this.generateGrid();
    this.assignShipButtons();
    this.rotateToggle();
    // this.placedShipAmmount = 0;
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

      gridCell.addEventListener('click', () => {
        console.log(spotOnBoard);
        if (!(this.gameBoard.currentSelectedShip === '')) {
          this.gameBoard.placeShip(
            [spotOnBoard.x, spotOnBoard.y],
            this.gameBoard.currentSelectedShip,
            this.isVertical,
          );
          // this.placedShipAmmount += 1;
          this.checkDom();
          this.checkIfDonePlacing();
        }
        // this.disablePlacement();
      });
      container.appendChild(gridCell);
    }
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
        child.classList.add('noClick');
        const shipButton = document.querySelector(`.${child.spotOnBoardObject.name}`);
        shipButton.disabled = true;
        // this.gameBoard.currentSelectedShip = '';
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

  rotateToggle() {
    const rotateButton = document.querySelector('.rotate-toggle');
    rotateButton.addEventListener('click', () => {
      this.isVertical = !this.isVertical;
      console.log(this.isVertical);
    });
  }

  checkIfDonePlacing() {
    // const grid = document.querySelector('.user-ships');
    // const checkArray = [];
    // for (let child = grid.firstChild; child !== null; child = child.nextSibling) {
    //   if (child.disabled) {
    //     this.placedShipAmmount += 1;
    //     checkArray.push(true);
    //   } else {
    //     checkArray.push(false);
    //   }
    // }
    // const checkArrayBool = checkArray.every(Boolean);
    if (this.gameBoard.placedShipAmmount === 5) {
      console.log('its all true!');
      document.querySelector('.player-grid-cont').classList.add('noClick');
    } else {
      console.log('no flase in check');
    }
    console.log(`PLACED SHIP AMOUNT: ${this.gameBoard.placedShipAmmount}`);
  }
  //   placeShips(ship) {

  //   }
}
