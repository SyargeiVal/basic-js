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
  if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!"); 
  const copyArr = arr.slice(0);
  for (let ind = 0; ind < arr.length; ind++) {
    if (arr[ind] === '--discard-prev') {
      if (ind - 1 < 0) continue;
      copyArr.splice(ind - 1, 1);
    }
    if (arr[ind] === '--double-prev') {
      if (ind - 1 < 0) continue;
      copyArr.splice(ind, 0, copyArr[ind - 1]);
    }
    if (arr[ind] === '--double-next') {
      if (ind + 1 > copyArr.length - 1) continue;
      copyArr.splice(ind + 1, 0, copyArr[ind + 1]);
    }
    if (arr[ind] === '--discard-next') {
      if (ind + 1 > copyArr.length) continue;
      copyArr.splice(ind + 1, 1);
    }
  }
  const sequences = ['--discard-prev', '--double-prev', '--double-next', '--discard-next'];
  const res = copyArr.filter(el => !(sequences.includes(el)));
  return res;
}

module.exports = {
  transform
};
