const Player = require('./player')
const GameBoard = require('./gameBoard');
const domController = require('./domController');

function gameLoop() {
  const gameDom = domController();

  const configureNewGame = () => {
    const plOneBoardObj = new GameBoard();
    const plTwoBoardObj = new GameBoard();
    const pl1 = new Player(plTwoBoardObj);
    const pl2 = new Player(plOneBoardObj);
    pl2.isAI = true;

    configureRandomShipPlacement(plOneBoardObj);
    configureRandomShipPlacement(plTwoBoardObj);

    gameDom.initGame(plOneBoardObj, plTwoBoardObj);
    gameDom.getRandomizeBtn().addEventListener('click', () => {configureNewGame()})
    gameDom.getRestartBtn().addEventListener('click', () => {
      const youSure = confirm("Do you want to restart game?");
      if (youSure) { configureNewGame() };
    });
    gameDom.getStartBtn().addEventListener('click', () => {  
      gameDom.hideIrrelevantButtons();
      playGame(pl1, pl2);
    });
  };

  const configureRandomShipPlacement = (gameBoardObj) => {
    const shipLengths = [5, 4, 3, 3, 2];
      while(shipLengths.length > 0) {
      const length = shipLengths.pop();
      const xCoord = (Math.floor(Math.random() * 10));
      const yCoord = (Math.floor(Math.random() * 10));
      if(gameBoardObj.placeShip(length, xCoord, yCoord)==false) { shipLengths.push(length) };
    }
  };

  const playGame = (pl1, pl2) => {
    let isPlOneTurn = true;
    
    function playRound(isPlOneTurn) {
      if(isPlOneTurn) {
        destroyClickListenersOfBoard(gameDom.getPlOneBoardDiv());
        pl1.isAI ? aiAttack(pl1, gameDom.getPlTwoBoardDiv()) : humanAttack(gameDom.getPlTwoBoardDiv());
      } else {
        destroyClickListenersOfBoard(gameDom.getPlTwoBoardDiv());
        pl2.isAI ? aiAttack(pl2, gameDom.getPlOneBoardDiv()) : humanAttack(gameDom.getPlOneBoardDiv());
      }
    };

    function aiAttack(player, enemyBoardDiv) {
      player.aiAttack();
      gameDom.renderBoard(enemyBoardDiv, player.enemyGameBoard);
      isPlOneTurn=!isPlOneTurn;
      loopUntilWinner();
    };

    function humanAttack(boardDiv) {
      for (const cellDiv of boardDiv.children) {
        cellDiv.addEventListener('click', performHit);
      }
    };

    function performHit( {target: cellDiv} ){
      if (hitIsLegal(cellDiv)) {
        const currentPlayer = isPlOneTurn ? pl1 : pl2;
        const [xCoord, yCoord] = translateToCoordinates(cellDiv);
        currentPlayer.attack(xCoord, yCoord);
        gameDom.renderBoard(cellDiv.parentElement, currentPlayer.enemyGameBoard);
        isPlOneTurn=!isPlOneTurn;
        loopUntilWinner() ;
      }
    };
    
    function hitIsLegal(cellDiv) {
      if(cellDiv.classList.contains('is-hit')) return false;
      return true;
    };
    
    function translateToCoordinates(cellDiv) {
      const boardDiv = cellDiv.parentElement;
      const boardArr = Array.from(boardDiv.children);
      const cellIdx = boardArr.indexOf(cellDiv);
  
      let position = cellIdx;
      let yCoord;
      let xCoord = 0;
      
      while(position-10>=0) {
          position-=10;
          xCoord+=1;
        }
      yCoord = position;
      return [xCoord, yCoord]
    };

    function loopUntilWinner(){
      if(pl1.enemyGameBoard.allShipsAreSunk()) {endGame(pl1); return };
      if(pl2.enemyGameBoard.allShipsAreSunk()) {endGame(pl2); return };
      playRound(isPlOneTurn)
    };

    function endGame(player) { 
      let aiBoard = document.querySelector('.ai-board');
      aiBoard.classList.add('player-board');
      aiBoard.classList.remove('ai-board');
      alert(`${player.getName()} is the undisputed winner!`);
    };

    function destroyClickListenersOfBoard(boardDiv) {
      for (const cellDiv of boardDiv.children) {
        cellDiv.removeEventListener('click', performHit)
      }
    };

    playRound(isPlOneTurn)   
  };

  return { 
    configureNewGame,
  }
}

module.exports = gameLoop;