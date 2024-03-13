class Ship {
  constructor (length) {
    this.length = length;
    this.hitCapacity = length;
  }
  
  hit = () => {this.hitCapacity-=1}

  isSunk = () => {return this.hitCapacity==0 ? true : false}
}

module.exports = Ship

// 5 ships with lengths [5, 4, 3, 3, 2]