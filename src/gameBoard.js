export class GameBoard{
    constructor(){
        this.boardCoords = []
        this.init()
    }

    init(){
        // [{x: 0, y:0, hit: false}]
        for(let i = 0; i < 10; i++){
            let boardSpot = {}
            boardSpot['hit'] = false
            boardSpot['x'] = i 
            for(let j=0; j < 10; j++){
                console.log(j)
                
                boardSpot['y'] = j
                this.boardCoords.push(boardSpot)
                
                console.log(boardSpot)
                
                
            }
            
            
        }

    }




    // in main loop: GameBoard.placeShip(currentShip) 
    //      current ship can be global variable in index.js - mock ships being chosen
}