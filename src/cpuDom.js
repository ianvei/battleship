/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
export default class CpuManipulateDom {
  constructor(playerGameBoard, enemyGameBoard, player) {
    this.gameBoard = playerGameBoard;
    this.enemyGameBoard = enemyGameBoard;
    this.isVertical = false;
    this.player = player;
    this.generateGrid();
    this.assignShipButtons();
    this.rotateToggle();
    this.placedShipAmmount = 0;
  }

  // eslint-disable-next-line class-methods-use-this
  generateGrid() {
    const container = document.querySelector('.enemy-grid-cont');
    for (const spotOnBoard of this.gameBoard.boardCoords) {
      const gridCell = document.createElement('div');
      gridCell.classList.add('cell');
      gridCell.setAttribute('data-colums', spotOnBoard.x);
      gridCell.setAttribute('data-rows', spotOnBoard.y);
      gridCell.spotOnBoardObject = spotOnBoard;

      gridCell.addEventListener('click', () => {
        console.log(spotOnBoard);
        this.gameBoard.registerHit([spotOnBoard.x, spotOnBoard.y]);
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
    const grid = document.querySelector('.enemy-grid-cont');
    for (let child = grid.firstChild; child !== null; child = child.nextSibling) {
      if (child.spotOnBoardObject.name) {
        child.classList.add('occupied');
        child.classList.add('noClick');
        const shipButton = document.querySelector(`.${child.spotOnBoardObject.name}`);
        shipButton.disabled = true;
      }
    }
  }

  rotateToggle() {
    this.isVertical = !this.isVertical;
    console.log(this.isVertical);
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
      console.log('all done placing!');
    }
  }
  //   placeShips(ship) {

  //   }
}
