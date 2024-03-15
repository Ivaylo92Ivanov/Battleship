const Cell = require('./cell')
const Ship = require('./ship')

// xCoord: left -> right
// yCoord: top -> bottom

class GameBoard {
  constructor () {
    this.board = []
    this.allShips = [];
    // populate board with Cell nodes, 10x10
    for(let i=0; i<10; i++) {
      const row = []
      for(let j=0; j<10; j++) { row.push(new Cell()) };
      this.board.push(row)
    }
  }

  placeShip = (length, xCoord, yCoord) => {
    
    const ship = new Ship(length);
    this.allShips.push(ship)

    let xPlacementIsPossible = false;
    let yPlacementIsPossible = false
    
    // check if placement coordinates are on board
    const possibleRange = [...Array(10).keys()];
    if ( !possibleRange.includes(xCoord) || !possibleRange.includes(yCoord) ) { return false };

    // check placement possible on X and Y positions
    if (possibleRange.includes(xCoord + length-1) ) { xPlacementIsPossible = true; };
    if (possibleRange.includes(yCoord + length-1) ) { yPlacementIsPossible = true; };

    // get the placement coordinates for X and Y positions (if available)
    let xPositionCells = [];
    let yPositionCells = [];

    if (xPlacementIsPossible) { for (let x = xCoord; x<xCoord+length; x++ ) {xPositionCells.push(this.board[x][yCoord])} };
    if (yPlacementIsPossible) { for (let y = yCoord; y<yCoord+length; y++ ) {yPositionCells.push(this.board[xCoord][y])} };

    // check if X and Y positions already contain a ship
    for (const cell of xPositionCells) { if (cell.shipHere!==undefined) xPlacementIsPossible=false };
    for (const cell of yPositionCells) { if (cell.shipHere!==undefined) yPlacementIsPossible=false };

    if (!xPlacementIsPossible && !yPlacementIsPossible) { return false }

    // at this point its possible to place the ship at least in one direction
    // try placing on X position, and if not possible place on Y position
    if (xPlacementIsPossible) {
      for (const cell of xPositionCells) {cell.shipHere = ship} 
    } else {
      for (const cell of yPositionCells) {cell.shipHere = ship} 
    };

    return true;
  }

  receiveAttack = (xCoord, yCoord) => { 
    let targetedCell = this.board[xCoord][yCoord];
    if (targetedCell.isHit) return false;

    targetedCell.isHit = true;
    if (targetedCell.shipHere) targetedCell.shipHere.hit()
    return true
  }

  allShipsAreSunk = () => {
    for(let ship of this.allShips) { if (!ship.isSunk()) return false };
    return true
  }
}

module.exports =  GameBoard