const Player = require('./player')
const GameBoard = require('./gameBoard');

function domInitializer () {
  const plOneBoard = new GameBoard();
  const plTwoBoard = new GameBoard();
  const pl1 = new Player(plOneBoard, plTwoBoard);
  const pl2 = new Player(plTwoBoard, plOneBoard);

  placeHeader()
  placeBoards(plOneBoard, plTwoBoard)
  

}

function placeHeader() {
  const body = document.querySelector('body');
  const header = document.createElement('h1');
  header.innerText = 'Battleship Game';
  header.className = 'game-header';
  body.append(header)
}

function placeBoards(plOneBoardObject, plTwoBoardObject) {
  const body = document.querySelector('body');

  const boardsWrapper = document.createElement('div');
  boardsWrapper.className = "boards-wrapper";

  const plOneBoard = generateBoard(plOneBoardObject, "Player (Human Intelligence)");
  const plOneStats = generateStatsField();

  const plTwoBoard = generateBoard(plTwoBoardObject, "Artificial Intelligence");
  const plTwoStats = generateStatsField();

  boardsWrapper.append(plOneStats)
  boardsWrapper.append(plOneBoard);

  boardsWrapper.append(plTwoBoard);
  boardsWrapper.append(plTwoStats)

  body.append(boardsWrapper)
}

function generateBoard (gameBoardObj, plName) {
  const wrapper = document.createElement('div');
  wrapper.className = "player-board-wrapper"

  const playerHeader = document.createElement('h2');
  playerHeader.innerText = plName;

  const board = document.createElement('div');
  board.className = "board";

  randomShipPlacement(gameBoardObj)
  console.log(gameBoardObj.board)
  gameBoardObj.board.forEach((rowObj) => {
    rowObj.forEach((cellObj) => {
      const cell = document.createElement('div');
      cell.className = "cell";
      if(cellObj.shipHere) {cell.classList.add('has-ship')}
      board.append(cell);
    })
  });

  wrapper.append(playerHeader);
  wrapper.append(board);

  return wrapper
}

function randomShipPlacement(gameBoardObj) {
  const shipLengths = [5, 4, 3, 3, 2]
  while(shipLengths.length > 0) {
    const length = shipLengths.pop();
    const xCoord = (Math.floor(Math.random() * 10));
    const yCoord = (Math.floor(Math.random() * 10));
    if(gameBoardObj.placeShip(length, xCoord, yCoord)==false) {shipLengths.push(length)}
  }
}

function generateStatsField () {
  const wrapper = document.createElement('div');
  wrapper.className = 'stats-wrapper';

  const header = document.createElement('h2');
  header.innerText = 'Ships in game:';

  wrapper.append(header);
  const shipLengths = [5, 4, 3, 3, 2]

  shipLengths.forEach((length) => {
    const shipMock = document.createElement('h3')
    // const shipText = 
    shipMock.innerText = "[] ".repeat(length)
    wrapper.append(shipMock)
  })

  return wrapper;
}


module.exports = domInitializer

