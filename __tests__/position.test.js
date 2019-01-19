const {
  findClosestRectangle,
  findClosestRectangle2,
  isEnclosing,
  rectanglesInRectangleAll,
  rectanglesInRectangle
} = require('../src/position')

test('findClosestRectangle', () => {

  expect(findClosestRectangle([3, 8, 5, 4], [[2, 9, 6, 3]]))
    .toEqual([ 2, 9, 6, 3 ])

})

test('findClosestRectangle2', () => {

  expect(findClosestRectangle2([3, 8, 5, 4], [[2, 9, 6, 3], [1, 10, 7, 2]]))
    .toEqual([1, 10, 7, 2])

})

test('isEnclosing', () => {

  expect(isEnclosing([2, 9, 6, 3], [[2, 9, 6, 3], [1, 10, 7, 2]]))
    .toEqual(true)

  expect(isEnclosing([1, 10, 7, 2], [[2, 9, 6, 3], [1, 10, 7, 2]]))
    .toEqual(false)

})

test('rectanglesInRectangleAll', () => {

  expect(rectanglesInRectangleAll([2, 9, 6, 3], [[3, 8, 5, 4], [1, 10, 7, 2]]))
    .toEqual([[3, 8, 5, 4]])

})

test('oneInRectangle', () => {

  expect(rectanglesInRectangle([1, 10, 10, 1], [[2, 9, 6, 3], [1, 20, 10, 11]]))
    .toEqual([[2, 9, 6, 3]])

  expect(rectanglesInRectangle([1, 10, 10, 1], [[2, 5, 6, 3], [2, 9, 6, 6], [1, 20, 10, 11]]))
    .toEqual([[2, 5, 6, 3], [2, 9, 6, 6]])

})

