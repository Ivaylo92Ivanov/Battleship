const GameBoard = require('./gameBoard');
const Cell = require('./cell');
const Ship = require('./ship');


test('Gameboard gets defined', () => {
  const testBoard = new GameBoard();
  expect(testBoard).toBeDefined();
})

test('Gameboard: contains Cell objects as values ', () => {
  const testBoard = new GameBoard();
  expect(testBoard.board[0][0] instanceof Cell).toBeTruthy();
  expect(testBoard.board[2][4] instanceof Cell).toBeTruthy();
  expect(testBoard.board[9][4] instanceof Cell).toBeTruthy();
})

test('Gameboard: Should be able to place ship inside of board only', () => {
  const testBoard = new GameBoard();
  expect(testBoard.placeShip(5, 9, 9)).toBeFalsy();
  expect(testBoard.placeShip(5, -1, 4)).toBeFalsy(); 
  expect(testBoard.placeShip(5, 6, 6)).toBeFalsy();
  expect(testBoard.placeShip(5, 10, 2)).toBeFalsy();
  expect(testBoard.placeShip(1, 9, 10)).toBeFalsy();

  expect(testBoard.placeShip(5, 0, 0)).toBeTruthy();
  expect(testBoard.placeShip(1, 9, 9)).toBeTruthy();
})

test('Gameboard: Should not be able to place ship on taken cells', () => {
  const testBoard = new GameBoard();
  const testShip = new Ship(1);
  // simulate having a ship on coordinates 0, 0
  testBoard.board[0][0].shipHere = testShip;
  expect(testBoard.placeShip(2, 0, 0)).toBeFalsy();
  expect(testBoard.placeShip(2, 1, 0)).toBeTruthy();

  // X path: blocked, Y path: open; should be able to place
  testBoard.board[0][9].shipHere = testShip;
  expect(testBoard.placeShip(2, 0, 8)).toBeTruthy() ;

  // X path: blocked, Y path: blocked; should not be able to place
  testBoard.board[1][8].shipHere = testShip;
  expect(testBoard.placeShip(2, 0, 8)).toBeFalsy();
}) 

test('Gameboard: cells contain ship after placement ', () => {
  const testBoard = new GameBoard();
  expect(testBoard.board[0][0].shipHere).toBeFalsy();
  testBoard.placeShip(4, 0, 0);
  expect(testBoard.board[0][0].shipHere instanceof Ship).toBeTruthy();
})

test('Gameboard: can`t place ship on top of ship', () => {
  const testBoard = new GameBoard();
  // placing a ship
  testBoard.placeShip(4, 0, 0);
  // trying to place another ship on top of taken coordinates
  expect(testBoard.placeShip(4, 1, 0)).toBeFalsy()
  expect(testBoard.placeShip(4, 2, 0)).toBeFalsy()
  expect(testBoard.placeShip(4, 3, 0)).toBeFalsy()
  // now trying to place right after the already placed ship (should place)
  expect(testBoard.placeShip(4, 4, 0)).toBeTruthy()
})
