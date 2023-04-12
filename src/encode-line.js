const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  let resArr = [''], sumChar = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i+1]) {
        sumChar++;
    } else if (sumChar != 0) {
        resArr.push((sumChar + 1) + str[i]);
        sumChar = 0;
    } else {
        resArr.push(str[i]);
    }
  }
  return resArr.join('');
}

module.exports = {
  encodeLine
};
