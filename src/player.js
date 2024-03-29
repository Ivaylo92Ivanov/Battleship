
class Player {
  constructor(enemyGameBoard) {
    this.enemyGameBoard = enemyGameBoard;
    this.isAI = false;
    
  }
  getName = () => {
    return this.isAI ? "Artificial Intelligence" : "Human Intelligence" ;
  }

  aiAttack = () => {
    const xCoord = (Math.floor(Math.random() * 10));
    const yCoord = (Math.floor(Math.random() * 10));
    const targetedCell = this.enemyGameBoard.board[xCoord][yCoord]

    if(targetedCell.isHit) { return this.aiAttack() }

    targetedCell.isHit=true;
    if (targetedCell.shipHere) targetedCell.shipHere.hit()
  }

  attack = (xCoord, yCoord) => {
    const targetedCell = this.enemyGameBoard.board[xCoord][yCoord]

    if(targetedCell.isHit) { return false } 

    targetedCell.isHit=true;
    if (targetedCell.shipHere) targetedCell.shipHere.hit()
  }
}

module.exports = Player