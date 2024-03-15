const GameBoard = require('./gameBoard');
const Cell = require('./cell');
const Ship = require('./ship');


test('Gameboard: gets defined', () => {
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
  // try to place outside board
  expect(testBoard.placeShip(5, 9, 9)).toBeFalsy();
  expect(testBoard.placeShip(5, -1, 4)).toBeFalsy(); 
  expect(testBoard.placeShip(5, 6, 6)).toBeFalsy();
  expect(testBoard.placeShip(5, 10, 2)).toBeFalsy();
  expect(testBoard.placeShip(1, 9, 10)).toBeFalsy();
  // try to place inside board
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
  // trying to place another ship on the same row, but on taken coordinates
  expect(testBoard.placeShip(4, 1, 0)).toBeFalsy()
  expect(testBoard.placeShip(4, 2, 0)).toBeFalsy()
  expect(testBoard.placeShip(4, 3, 0)).toBeFalsy()
  // trying to place another ship on the same row, on free coordinates
  expect(testBoard.placeShip(2, 4, 0)).toBeTruthy()
  console.log(testBoard.board[9][0])
})

test('Gameboard: receives attack correctly', () => {
  const testBoard = new GameBoard();
  testBoard.board[0][0].shipHere = new Ship(1);
  // cell and ship on coordinates [0][0] should not be hit on initiation
  expect(testBoard.board[0][0].isHit).toBeFalsy();
  expect(testBoard.board[0][0].shipHere.isSunk()).toBeFalsy();
  // attack the cell and check if cell and ship on cell take the hit
  testBoard.receiveAttack(0, 0);
  expect(testBoard.board[0][0].isHit).toBeTruthy();
  expect(testBoard.board[0][0].shipHere.isSunk()).toBeTruthy();
})

test('Gameboard: receives attack on already hit cell ', () => {
  const testBoard = new GameBoard();
  testBoard.board[0][0].shipHere = new Ship(2);
  expect(testBoard.board[0][0].shipHere.hitCapacity).toBe(2)
  testBoard.receiveAttack(0, 0);
  expect(testBoard.board[0][0].isHit).toBeTruthy();
  expect(testBoard.board[1][0].isHit).toBeFalsy();
  expect(testBoard.board[0][0].shipHere.hitCapacity).toBe(1)
})

test('Gameboard: correctly detects if all ships are sunk', () => {
  const testBoard = new GameBoard();
  testBoard.placeShip(1, 0, 0)
  testBoard.placeShip(1, 0, 1)
  expect(testBoard.allShipsAreSunk()).toBeFalsy();
  testBoard.receiveAttack(0, 0);
  expect(testBoard.allShipsAreSunk()).toBeFalsy();
  testBoard.receiveAttack(0, 1);
  expect(testBoard.allShipsAreSunk()).toBeTruthy();
})