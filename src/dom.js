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
    this.placeForMe();
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
        if (!(this.gameBoard.currentSelectedShip === '')) {
          this.gameBoard.placeShip(
            [spotOnBoard.x, spotOnBoard.y],
            this.gameBoard.currentSelectedShip,
            this.isVertical,
          );
          this.checkDom();
          this.checkIfDonePlacing();
        }
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
        child.innerText = 'X';
        child.classList.add('noClick');
        const shipButton = document.querySelector(`.${child.spotOnBoardObject.name}`);
        shipButton.disabled = true;
      }
    }
  }

  placeForMe() {
    document.querySelector('.place-my-ships').addEventListener('click', () => {
      this.player.placeAllShips();
      this.checkDom();
      document.querySelector('.enemy-grid-cont').classList.toggle('noClick');
      document.querySelector('.place-my-ships').classList.toggle('noClick');
      document.querySelector('.place-my-ships').disabled = true;
      document.querySelector('.player-grid-cont').classList.toggle('noClick');
    });
  }

  assignShipButtons() {
    const carrier = document.querySelector('.carrier');
    const battleship = document.querySelector('.battleship');
    const cruiser = document.querySelector('.cruiser');
    const submarine = document.querySelector('.submarine');
    const destroyer = document.querySelector('.destroyer');

    carrier.shipObject = this.player.currentShips[0];
    carrier.addEventListener('click', () => {
      this.gameBoard.currentSelectedShip = carrier.shipObject;
      document.querySelector('.place-my-ships').classList.toggle('noClick');
      document.querySelector('.place-my-ships').disabled = true;
    });

    battleship.shipObject = this.player.currentShips[1];
    battleship.addEventListener('click', () => {
      this.gameBoard.currentSelectedShip = battleship.shipObject;
      document.querySelector('.place-my-ships').classList.toggle('noClick');
      document.querySelector('.place-my-ships').disabled = true;
    });

    cruiser.shipObject = this.player.currentShips[2];
    cruiser.addEventListener('click', () => {
      this.gameBoard.currentSelectedShip = cruiser.shipObject;
      document.querySelector('.place-my-ships').classList.toggle('noClick');
      document.querySelector('.place-my-ships').disabled = true;
    });

    submarine.shipObject = this.player.currentShips[3];
    submarine.addEventListener('click', () => {
      this.gameBoard.currentSelectedShip = submarine.shipObject;
      document.querySelector('.place-my-ships').classList.toggle('noClick');
      document.querySelector('.place-my-ships').disabled = true;
    });

    destroyer.shipObject = this.player.currentShips[4];
    destroyer.addEventListener('click', () => {
      this.gameBoard.currentSelectedShip = destroyer.shipObject;
      document.querySelector('.place-my-ships').classList.toggle('noClick');
      document.querySelector('.place-my-ships').disabled = true;
    });
  }

  rotateToggle() {
    const rotateButton = document.querySelector('.rotate-toggle');
    rotateButton.addEventListener('click', () => {
      this.isVertical = !this.isVertical;
      document.querySelector('.rotate-indicator').classList.toggle('ninety-degrees');
    });
  }

  checkIfDonePlacing() {
    if (this.gameBoard.placedShipAmmount === 5) {
      document.querySelector('.player-grid-cont').classList.add('noClick');
      document.querySelector('.enemy-grid-cont').classList.toggle('noClick');
    }
  }
}
