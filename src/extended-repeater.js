const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let arr = [];
  let {repeatTimes, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;

  if (repeatTimes == null) return String(str) + String(addition);

  for (let i = 0; i < repeatTimes; i++) {
      let subArr = [];
      let subArr2 = [];
      subArr.push([String(str)]);

      for (let j = 0; j < additionRepeatTimes; j++) {
          subArr2.push(String(addition));
      }

      subArr.push(subArr2.join(additionSeparator));

      arr.push(subArr.join(''));
  }

  return arr.join(separator);

}

module.exports = {
  repeater
};
