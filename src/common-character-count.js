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
function getCommonCharacterCount( s1, s2 ) {
  let arrGen, arr, res = 0;
    if(s1.length > s2.length) { arrGen = s1.split(''); arr = s2.split(''); } 
    else { arr = s1.split(''); arrGen = s2.split(''); }
    for (let i = 0; i < arrGen.length; i++) {
        if(arr.indexOf(arrGen[i]) != -1) {
            res++;
            arr.splice(arr.indexOf(arrGen[i]), 1);
        }
    }
    return res;
}

module.exports = {
  getCommonCharacterCount
};
