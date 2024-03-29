const getXY = require('./index')

const tests = [
  /* [index, x, y] */
  [0, 0, 0],
  [1, 1, 0],
  [2, 2, 0],
  [3, 3, 0],
  [4, 0, 1],
  [5, 1, 1],
  [6, 2, 1],
  [7, 3, 1],
  [8, 0, 2],
  [9, 1, 2],
  [10, 2, 2],
  [11, 3, 2],
  [12, 0, 3],
  [13, 1, 3],
  [14, 2, 3],
  [15, 3, 3],
]

describe('getXY', () => {
  tests.forEach(t => {
    const [index, x, y] = t
    test(`
        index: ${index}
        x: ${x}
        y: ${y}
    `, () => {
      expect(getXY(index)).toEqual([x, y])
    })
  })
})
