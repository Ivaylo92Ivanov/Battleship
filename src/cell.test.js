const Cell = require('./cell');

test('Cell gets defined', () => {
  const cell = new Cell();
  expect(cell).toBeDefined();
});
