const Player = require('./player')
const GameBoard = require('./gameBoard');


test('Player gets defined', () => {
  const testPlayer = new Player();
  expect(testPlayer).toBeDefined();
})

test('Player attacks cell', () => {
  const plOneBoard = new GameBoard();
  const plTwoBoard = new GameBoard();
  const pl1 = new Player(plOneBoard, plTwoBoard);
  
  expect(plTwoBoard.board[0][0].isHit).toBeFalsy()
  pl1.attack(0, 0)
  expect(plTwoBoard.board[0][0].isHit).toBeTruthy()
})

test('Player attacks a cell that is already hit', () => {
  const plOneBoard = new GameBoard();
  const plTwoBoard = new GameBoard();
  const pl1 = new Player(plOneBoard, plTwoBoard);
  plOneBoard.placeShip(1, 0, 0)
  pl1.attack(0, 0)
  expect(pl1.attack(0, 0)).toBeFalsy()
})

test('Enemy ship gets hit on player attack', () => {
  const plOneBoard = new GameBoard();
  const plTwoBoard = new GameBoard();
  const pl1 = new Player(plOneBoard, plTwoBoard);
  plTwoBoard.placeShip(1, 0, 0)

  pl1.attack(0, 0)
  expect(plTwoBoard.board[0][0].shipHere.isSunk()).toBeTruthy()
})

test('AI produces attack', () => {
  const plOneBoard = new GameBoard();
  const plTwoBoard = new GameBoard();
  const pl1 = new Player(plOneBoard, plTwoBoard);
  const pl2 = new Player(plTwoBoard, plOneBoard);
  pl2.isAI = true;

  pl2.attack();
  // find if there is a hit
  let attackedCell;
  for (const row of plOneBoard.board) {
    for (const cell of row) {
      if (cell.isHit) {attackedCell = cell; break}
    }
  }
  expect(attackedCell).toBeDefined()
})