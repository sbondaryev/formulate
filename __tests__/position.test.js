const {
  findClosestRectangle,
  findClosestRectangle2,
  isEnclosing
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
