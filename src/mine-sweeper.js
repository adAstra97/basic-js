const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let resultMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    resultMatrix.push([]);

    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;
  
      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          if (x > -1 && y > -1 && x < matrix.length && y < matrix[i].length) {

            if (matrix[x][y] === true) {
              count++;
            } else {
              count;
            }
          }
        }
      }

      if (matrix[i][j] === true) {
        resultMatrix[i][j] = count - 1;
      } else {
        resultMatrix[i][j] = count;
      }
    }
  }
  return resultMatrix;
}

module.exports = {
  minesweeper
};
