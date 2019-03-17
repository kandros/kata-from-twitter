function getXY(index) {
  /**
   * why 4?
   * looking at results every 4 times a pattern repeat
   *
   * the pattern is x is the rest of index / 4
   * and y is the result of index / 4 rouded
   */

  const x = index % 4
  const y = Math.floor(index / 4)

  return [x, y]
}

module.exports = getXY
