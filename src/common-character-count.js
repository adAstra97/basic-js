const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let str = '';
  let arrayS2 = s2.split('');

  for (let i = 0; i < s1.length; i++) {
    if (arrayS2.includes(s1[i])) {
      str += s1[i];

      let idx = arrayS2.indexOf(s1[i]);
      arrayS2.splice(idx, 1);
    }
  }

  return str.length;
}

module.exports = {
  getCommonCharacterCount
};
