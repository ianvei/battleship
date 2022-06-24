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
    this.rotateToggle();
    this.closeOverlay();
    this.placedShipAmmount = 0;
  }

  // eslint-disable-next-line class-methods-use-this
  generateGrid() {
    const container = document.querySelector('.enemy-grid-cont');
    container.classList.add('noClick');
    for (const spotOnBoard of this.gameBoard.boardCoords) {
      const gridCell = document.createElement('div');
      gridCell.classList.add('cell');
      gridCell.setAttribute('data-colums', spotOnBoard.x);
      gridCell.setAttribute('data-rows', spotOnBoard.y);
      gridCell.spotOnBoardObject = spotOnBoard;

      gridCell.addEventListener('click', () => {
        this.gameBoard.registerHit([spotOnBoard.x, spotOnBoard.y], 'player');
        gridCell.classList.add('noClick');
        if (gridCell.spotOnBoardObject.hit) {
          gridCell.classList.add('occupied');
          gridCell.classList.add('enemy-occupied');
          gridCell.innerHTML = '<img src="images/mine.png" alt="mine image" class="mine-img"></img>';
          gridCell.style.backgroundColor = 'red';
        } else {
          gridCell.innerText = 'X';
          gridCell.classList.add('enemy-occupied');
          gridCell.innerHTML = '<img src="images/mine.png" alt="mine image" class="mine-img"></img>';
        }
        document.querySelector('.enemy-grid-cont').classList.toggle('noClick');
        setTimeout(() => {
          this.player.randomGuess();
          this.checkEnemyDom();
          document.querySelector('.enemy-grid-cont').classList.toggle('noClick');
        }, '700');
      });
      container.appendChild(gridCell);
    }
    return container;
  }

  checkForShips(gridCell) {
    if (gridCell.spotOnBoardObject.name) {
      gridCell.classList.add('enemy-occupied');
    }
  }

  checkDom() {
    const grid = document.querySelector('.enemy-grid-cont');
    for (let child = grid.firstChild; child !== null; child = child.nextSibling) {
      if (child.spotOnBoardObject.name) {
        child.classList.add('enemy-occupied');
      }
    }
  }

  checkEnemyDom() {
    const grid = document.querySelector('.player-grid-cont');
    for (let child = grid.firstChild; child !== null; child = child.nextSibling) {
      if (child.spotOnBoardObject.hit) {
        child.classList.add('noClick');
        child.classList.add('occupied');
        child.innerHTML = '<img src="images/mine.png" alt="mine image" class="mine-img"></img>';
        child.style.backgroundColor = 'red';
      }
      if ((!child.spotOnBoardObject.guessable) && (!child.spotOnBoardObject.name)) {
        child.classList.add('noClick');
        child.classList.add('enemy-occupied');
        child.innerHTML = '<img src="images/mine.png" alt="mine image" class="mine-img"></img>';
      }
    }
  }

  rotateToggle() {
    this.isVertical = !this.isVertical;
  }

  closeOverlay() {
    document.querySelector('.close-overlay').addEventListener('click', () => {
      document.querySelector('.beginning-popup').style.display = 'none';
      document.querySelector('.beginning-overlay').style.display = 'none';
    });
  }

  checkIfDonePlacing() {
    if (this.gameBoard.placedShipAmmount === 5) {
      console.log('all done placing!');
    }
  }
}
