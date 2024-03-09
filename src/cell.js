class Cell {
  // xCoord: left -> right
  // yCoord: top -> bottom
  constructor(xCoord, yCoord) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }
  containsShip = false;
  isHit = false;
};

module.exports = Cell;