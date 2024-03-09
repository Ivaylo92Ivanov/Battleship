const Cell = require('./cell');

test('Cell gets defined', () => {
  const cell = new Cell(1, 2);
  expect(cell).toBeDefined();
});

test('Cell has coordinates', () => {
  const cell = new Cell(1, 2);
  expect(cell.xCoord).toBe(1);
  expect(cell.yCoord).toBe(2);
})