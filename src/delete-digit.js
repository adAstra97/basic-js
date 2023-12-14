const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strForLoop = String(n);
  let resultArray = [];

  for (let i = 0; i < strForLoop.length; i++) {
      let array = String(n).split('').map(Number);
      array.splice(i, 1);
      resultArray.push(array.join(''));
  }
    return Math.max(...resultArray);
}

module.exports = {
  deleteDigit
};
