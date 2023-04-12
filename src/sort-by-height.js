const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( array ) {
  let arrFree = [], indexes = [], quantity = array.length, res = [], count = 0;
  for(let i = 0; i < quantity; i++){
      if(array[i] === -1){
          indexes.push(i);
      } else {
          arrFree.push(array[i]);
      }
  }
  arrFree.sort((a, b) => a - b);
  for(let i = 0; i < quantity; i++){
      if(indexes.includes(i)){
          res.push(-1);
      } else {
          res.push(arrFree[count]);
          count++;
      }
  }
  return res;
}

module.exports = {
  sortByHeight
};
