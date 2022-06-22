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
        console.log(spotOnBoard);
        this.gameBoard.registerHit([spotOnBoard.x, spotOnBoard.y], 'player');
        gridCell.classList.add('noClick');
        if (gridCell.spotOnBoardObject.hit) {
          // gridCell.innerText = '!';
          gridCell.classList.add('occupied');
          gridCell.classList.add('enemy-occupied');
          // child.innerText = '!';
          gridCell.innerHTML = '<img src="../src/images/mine.png" alt="mine image" class="mine-img"></img>';
          gridCell.style.backgroundColor = 'red';
        } else {
          gridCell.innerText = 'X';
          gridCell.classList.add('enemy-occupied');
          // child.innerText = '!';
          gridCell.innerHTML = '<img src="../src/images/mine.png" alt="mine image" class="mine-img"></img>';
        }
        document.querySelector('.enemy-grid-cont').classList.toggle('noClick');
        setTimeout(() => {
          this.player.randomGuess();
          this.checkEnemyDom();
          console.log('Delayed for 1 second.');
          document.querySelector('.enemy-grid-cont').classList.toggle('noClick');
        }, '700');
        // this.enemyGameBoard. //maybe pass this
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
        // child.classList.add('occupied');
        child.classList.add('enemy-occupied');
        // child.classList.add('occupied');
        // child.innerText = '!';
      }
      // if ((!child.spotOnBoardObject.guessable) && (!child.spotOnBoardObject.name)) {
      //   child.classList.add('enemy-occupied');
      //   child.innerText = 'X';
      // }
    }
  }

  checkEnemyDom() {
    const grid = document.querySelector('.player-grid-cont');
    for (let child = grid.firstChild; child !== null; child = child.nextSibling) {
      if (child.spotOnBoardObject.hit) {
        // child.classList.add('enemy-occupied');
        child.classList.add('noClick');
        child.classList.add('occupied');
        // child.innerText = '!';
        child.innerHTML = '<img src="../src/images/mine.png" alt="mine image" class="mine-img"></img>';
        child.style.backgroundColor = 'red';
      }
      if ((!child.spotOnBoardObject.guessable) && (!child.spotOnBoardObject.name)) {
        child.classList.add('noClick');
        child.classList.add('enemy-occupied');
        child.innerHTML = '<img src="../src/images/mine.png" alt="mine image" class="mine-img"></img>';
        // child.innerText = 'X';
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
