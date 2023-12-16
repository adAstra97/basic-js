const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  let result = [];

  let actions = {
    '--discard-next' : (i) => {
      if (arr[i + 1] > 0) {
        arr.splice(i + 1, 1);
      }
    },
    '--discard-prev' : (i) => {
      if (arr[i - 1] > 0) {
        result.splice(i - 1, 1);
      }
    },
    '--double-next' : (i) => {
      if (arr[i + 1] > 0) {
        result.push(arr[i + 1]);
      }
    },
    '--double-prev' : (i) => {
      if (result[result.length - 1] > 0 && arr[i - 1] !== '--discard-next') {
        result.push(result[result.length - 1]);
      }
    },
  };

  for (let i = 0; i < arr.length; i++) {
    if (actions[arr[i]]) {
      actions[arr[i]](i);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {
  transform
};
