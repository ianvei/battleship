import { Ship } from "./ship";
import { GameBoard } from "./gameBoard";


// could go in game loop object, just want to test for now.
let shipStartingArray = [
    {name: "carrier", length: 5},
    {name: "battleship", length: 4},
    {name: "cruiser", length: 3},
    {name: "submarine", length: 3},
    {name: "destroyer", length: 2},
]

// in fact, this could probably go in player 
for (let ship of shipStartingArray){
    let newShip = new Ship(ship.length, ship.name, [1,3])
    newShip.hit(0)
    console.log(newShip)
}

let testBoard = new GameBoard
console.log(testBoard)