/* eslint-disable max-len */
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

const testBoard = new GameBoard();
// console.log(playerOneBoard);
// console.log(testBoard);

const shipToPlace = new Ship(shipStartingArray[1].length, shipStartingArray[1].name, [3, 4]);
const secondShipToPlace = new Ship(shipStartingArray[0].length, shipStartingArray[1].name, [1, 2]);

testBoard.placeShip([3, 4], shipToPlace, true);

testBoard.placeShip([1, 2], secondShipToPlace, false);

console.log(testBoard);
