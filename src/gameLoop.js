const Player = require('./player')
const GameBoard = require('./gameBoard');
const domController = require('./domController');

function gameLoop() {
  const gameDom = domController();

    const configureNewGame = () => {
      const plOneBoard = new GameBoard();
      const plTwoBoard = new GameBoard();
      const pl1 = new Player(plTwoBoard);
      const pl2 = new Player(plOneBoard);
      pl2.isAI = true;

      randomShipPlacement(plOneBoard);
      randomShipPlacement(plTwoBoard);

      gameDom.initGame(plOneBoard, plTwoBoard);
    }

    const randomShipPlacement = (gameBoardObj) => {
      const shipLengths = [5, 4, 3, 3, 2];
      while(shipLengths.length > 0) {
        const length = shipLengths.pop();
        const xCoord = (Math.floor(Math.random() * 10));
        const yCoord = (Math.floor(Math.random() * 10));
        if(gameBoardObj.placeShip(length, xCoord, yCoord)==false) { shipLengths.push(length) };
      }
    }

  return {
    configureNewGame,

  }
}

module.exports = gameLoop;