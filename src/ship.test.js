const Ship = require("./ship")

test('Ship has length', () => {
  const testShip = new Ship(4)
  expect(testShip.length).toBe(4)
})

test('Ship gets hit', () => {
  const testShip = new Ship(4)

  testShip.hit()
  expect(testShip.hitCapacity).toBe(3)

  testShip.hit()
  expect(testShip.hitCapacity).toBe(2)

  testShip.hit()
  expect(testShip.hitCapacity).toBe(1)
})

test('Ship is sunk', () => {
  const testShip = new Ship(1)
  expect(testShip.isSunk()).toBe(false)

  testShip.hit()
  expect(testShip.isSunk()).toBe(true)
})