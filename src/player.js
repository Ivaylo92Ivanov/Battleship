
class Player {
  constructor(enemyGameBoard) {
    this.enemyGameBoard = enemyGameBoard;
    this.isWinner = false;
    this.isAI = false;
  }

  attack = (xCoord, yCoord) => {
    if (this.isAI) {
      this.AiAttack();
      return;
    }
    this.userAttack(xCoord, yCoord);
  }

  AiAttack = () => {
    const xCoord = (Math.floor(Math.random() * 10));
    const yCoord = (Math.floor(Math.random() * 10));
    const targetedCell = this.enemyGameBoard.board[xCoord][yCoord]

    if(targetedCell.isHit) { return this.AiAttack() }

    targetedCell.isHit=true;
    if (targetedCell.shipHere) targetedCell.shipHere.hit()
  }

  userAttack = (xCoord, yCoord) => {
    const targetedCell = this.enemyGameBoard.board[xCoord][yCoord]
    /// not enough, need to maybe link it to some isPlayerTurn logic or something so the user can keep adding hits until a legal hit is achieved
    if(targetedCell.isHit) { return false } 

    targetedCell.isHit=true;
    if (targetedCell.shipHere) targetedCell.shipHere.hit()
  }
}

module.exports = Player