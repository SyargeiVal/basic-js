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
function deleteDigit( n ) {
  let maxNum = 0;
    const arrNum = n.toString().split('');
    for (let i = 0; i < arrNum.length; i++) {
      let arrCur = arrNum.slice();
      arrCur.splice(i, 1);
      let str = arrCur.join('');
      if(parseInt(str) > maxNum) maxNum = parseInt(str);
    }
    return maxNum;
}

module.exports = {
  deleteDigit
};
