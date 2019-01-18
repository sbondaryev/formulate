const {findClosestRectangle} = require('../src/position')

test('findClosestRectangle', () => {

  expect(findClosestRectangle([3, 8, 5, 4], [[2, 9, 6, 3]]))
    .toEqual([ 2, 9, 6, 3 ])

})
