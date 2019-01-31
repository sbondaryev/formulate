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
  firstBottom,
  firstTop,
  distance,
  closestTopR,
  closestTopL,
  closestTop,
  closestBottomR,
  closestBottomL,
  closestBottom,
  findRef
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

test('firstTop', () => {
  expect(firstTop([11, 10, 20, 1], [[1, 10, 10, 1], [1, 20, 10, 11]]))
    .toEqual([1, 20, 10, 11])
})

test('distance', () => {
  expect(distance(1, 1, 4, 5)).toEqual(5)
})

test('closestTopR', () => {
  expect(closestTopR([10, 10, 20, 0], [[0, 30, 5, 1], [6, 15, 9, 2], [6, 20, 9, 16]]))
    .toEqual([6, 15, 9, 2])
})

test('closestTopL', () => {
  expect(closestTopL([10, 10, 20, 0], [[0, 30, 5, 1], [6, 15, 9, 2], [6, 20, 9, 16]]))
    .toEqual([6, 15, 9, 2])
})

test('closestTop', () => {
  expect(closestTop([10, 10, 20, 0], [[0, 30, 5, 1], [6, 15, 9, 2], [6, 20, 9, 16]]))
    .toEqual([[6, 15, 9, 2], 'left'])
})

test('closestBottomR', () => {
  expect(closestBottomR([10, 18, 20, 13], [[21, 5, 25, 1], [30, 15, 35, 2], [21, 20, 25, 15]]))
    .toEqual([21, 20, 25, 15])
})

test('closestBottomL', () => {
  expect(closestBottomL([10, 18, 20, 13], [[21, 5, 25, 1], [30, 15, 35, 2], [21, 20, 25, 15]]))
    .toEqual([21, 20, 25, 15])
})

test('closestBottom', () => {
  expect(closestBottom([0, 10, 10, 0], [[10, 30, 15, 1], [10, 15, 19, 2], [16, 20, 19, 16]]))
    .toEqual([[10, 30, 15, 1], "left"])
})

test('findRef', () => {
  expect(findRef([10, 15, 19, 2], {
    'a': [10, 30, 15, 1],
    'b': [10, 15, 19, 2],
    'c': [16, 20, 19, 16]
  })).toEqual('b')
})
