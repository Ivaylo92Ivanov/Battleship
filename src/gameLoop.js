const Player = require('./player')
const GameBoard = require('./gameBoard');
const domController = require('./domController');

function gameLoop() {
  const gameDom = domController();
  let plOneBoard;
  let plTwoBoard;
  let pl1;
  let pl2;

  const configureNewGame = () => {
    plOneBoard = new GameBoard();
    plTwoBoard = new GameBoard();
    pl1 = new Player(plTwoBoard);
    pl2 = new Player(plOneBoard);
    pl2.isAI = true;

    configureRandomShipPlacement(plOneBoard);
    configureRandomShipPlacement(plTwoBoard);

    gameDom.initGame(plOneBoard, plTwoBoard);

    gameDom.getRandomizeBtn().addEventListener('click', () => {configureNewGame()})

    gameDom.getStartBtn().addEventListener('click', () => {  
      gameDom.getRandomizeBtn().style.visibility = 'hidden';
      gameDom.getStartBtn().style.visibility = 'hidden';
      gameDom.getRestartBtn().style.visibility = 'visible';
      gameDom.getRestartBtn().addEventListener('click', () => {
        const youSure = confirm("Do you want to restart game?");
        if (youSure) {configureNewGame()}
      });

      playGame(pl1, pl2);
    })
    
  }

  const configureRandomShipPlacement = (gameBoardObj) => {
    const shipLengths = [5, 4, 3, 3, 2];
    // const shipLengths = [2, 1];
      while(shipLengths.length > 0) {
      const length = shipLengths.pop();
      const xCoord = (Math.floor(Math.random() * 10));
      const yCoord = (Math.floor(Math.random() * 10));
      if(gameBoardObj.placeShip(length, xCoord, yCoord)==false) { shipLengths.push(length) };
    }
  }

  const playGame = (pl1, pl2) => {
    const plOneBoardDiv = gameDom.getPlOneBoardDiv();
    const plTwoBoardDiv = gameDom.getPlTwoBoardDiv();
    let isPlOneTurn = true;
    
    function playRound(isPlOneTurn) {
      if(isPlOneTurn) {
        destroyClickListenersOfBoard(plOneBoardDiv);
        pl1.isAI ? aiAttack(pl1, plTwoBoardDiv) : addClickListenersToBoard(plTwoBoardDiv);
      } else {
        destroyClickListenersOfBoard(plTwoBoardDiv);
        pl2.isAI ? aiAttack(pl2, plOneBoardDiv) :addClickListenersToBoard(plOneBoardDiv);
      }
    }

    function addClickListenersToBoard(boardDiv) {
      for (const cellDiv of boardDiv.children) {
        cellDiv.addEventListener('click', humanAttack)
      }
    }

    function destroyClickListenersOfBoard(boardDiv) {
      for (const cellDiv of boardDiv.children) {
        cellDiv.removeEventListener('click', humanAttack)
      }
    }

    function humanAttack( {target: cellDiv} ){
      if (hitIsLegal(cellDiv)) {
        const boardDiv = cellDiv.parentElement;
        const boardArr = Array.from(boardDiv.children);
        const cellLinearIdx = boardArr.indexOf(cellDiv);
        const currentPlayer = isPlOneTurn ? pl1 : pl2;

        let [xCoord, yCoord] = translateToCoordinates(cellLinearIdx)
        currentPlayer.attack(xCoord, yCoord)
        
        gameDom.renderBoard(boardDiv, currentPlayer.enemyGameBoard);
        isPlOneTurn=!isPlOneTurn
        doWeHaveAWinner() 
      }
    }
    
    function aiAttack(player, enemyBoardDiv) {
      player.aiAttack();
      gameDom.renderBoard(enemyBoardDiv, player.enemyGameBoard);
      isPlOneTurn=!isPlOneTurn;
      doWeHaveAWinner();
    }

    function hitIsLegal(cellDiv) {
      if(cellDiv.classList.contains('is-hit')) return false;
      return true;
    }
 
    function doWeHaveAWinner(){
      if(pl1.enemyGameBoard.allShipsAreSunk()) {endGame(pl1); return };
      if(pl2.enemyGameBoard.allShipsAreSunk()) {endGame(pl2); return };
      console.log(pl1.enemyGameBoard.board)
      console.log(pl1.enemyGameBoard.allShips)
      playRound(isPlOneTurn)
    }

    function endGame(player) {
      let aiBoard = document.querySelector('.ai-board')
      aiBoard.classList.add('player-board');
      aiBoard.classList.remove('ai-board');
      alert(`${player.name} is the undisputed winner!`)
    }

    playRound(isPlOneTurn)   
  }

  function translateToCoordinates(cellIdx) {
    let position = cellIdx;
    let yCoord;
    let xCoord = 0;
    
    while(position-10>=0) {
        position-=10;
        xCoord+=1;
      }
    yCoord = position;
    return [xCoord, yCoord]
  }

  return {
    configureNewGame,
  }
}

module.exports = gameLoop;