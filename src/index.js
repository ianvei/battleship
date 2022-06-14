/* eslint-disable no-console */
import Ship from './ship';
import GameBoard from './gameBoard';

// could go in game loop object, just want to test for now.
const shipStartingArray = [
  { name: 'carrier', length: 5 },
  { name: 'battleship', length: 4 },
  { name: 'cruiser', length: 3 },
  { name: 'submarine', length: 3 },
  { name: 'destroyer', length: 2 },
];

// in fact, this could probably go in player
// eslint-disable-next-line no-restricted-syntax
for (const ship of shipStartingArray) {
  const newShip = new Ship(ship.length, ship.name, [1, 3]);
  newShip.hit(0);
  console.log(newShip);
}

const playerOneBoard = new GameBoard();
const testBoard = new GameBoard();
console.log(playerOneBoard);
console.log(testBoard);
