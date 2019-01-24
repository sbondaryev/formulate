const {
  findClosestRectangle,
  findClosestRectangle2,
  isEnclosing,
  rectanglesInRectangleAll,
  rectanglesInRectangle,
  firstInRectangle,
  lastInRectangle,
  firstRight,
  firstLeft,
  firstBottom
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

test('firstInRectangle', () => {

  expect(firstInRectangle([1, 10, 10, 1], [[1, 10, 10, 1], [6, 5, 9, 2], [2, 5, 5, 2], [2, 9, 9, 6],]))
    .toEqual([2, 5, 5, 2])

})


test('lastInRectangle', () => {

  expect(lastInRectangle([1, 10, 10, 1], [[1, 10, 10, 1], [6, 5, 9, 2], [2, 5, 5, 2], [2, 9, 9, 6],]))
    .toEqual([6, 5, 9, 2])

})

test('firstRight', () => {

  expect(firstRight([1, 10, 10, 1], [[1, 20, 10, 11], [1, 21, 10, 30]]))
    .toEqual([1, 20, 10, 11])

  expect(firstRight([1, 10, 10, 1], [[9, 20, 20, 11], [11, 21, 20, 30]]))
    .toEqual([9, 20, 20, 11])
})


test('firstLeft', () => {

  expect(firstLeft([1, 40, 10, 31], [[1, 20, 10, 11], [1, 30, 10, 21]]))
    .toEqual([1, 30, 10, 21])

  expect(firstLeft([1, 30, 10, 31], [[9, 20, 20, 11], [9, 21, 20, 30]]))
    .toEqual([9, 21, 20, 30])
})

test('firstBottom', () => {

  expect(firstBottom([1, 10, 10, 1], [[11, 10, 21, 1], [11, 20, 21, 11]]))
    .toEqual([11, 10, 21, 1])
})
