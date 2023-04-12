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
  let arr = [];
  for(let i = 0; i < matrix.length; i++){
      arr[i] = [];
      for(let k = 0; k < matrix[i].length; k++){
          arr[i][k] = 0;
          if(i == 0){
              if(k == 0){
                  if(matrix[i][k + 1]){ arr[i][k] += 1 };
                  if(matrix[i + 1][k + 1]){ arr[i][k] += 1 };
                  if(matrix[i + 1][k]){ arr[i][k] += 1 };
              }
              if(k > 0 && k < matrix[i].length - 1){
                  if(matrix[i][k + 1]){ arr[i][k] += 1 };
                  if(matrix[i + 1][k + 1]){ arr[i][k] += 1 };
                  if(matrix[i + 1][k]){ arr[i][k] += 1 };
                  if(matrix[i + 1][k - 1]){ arr[i][k] += 1 };
                  if(matrix[i][k - 1]){ arr[i][k] += 1 };
              }
              if(k == matrix[i].length - 1){
                  if(matrix[i + 1][k]){ arr[i][k] += 1 };
                  if(matrix[i + 1][k - 1]){ arr[i][k] += 1 };
                  if(matrix[i][k - 1]){ arr[i][k] += 1 };
              }
          }
          if(i > 0 && i < matrix.length - 1){
              if(k == 0){
                  if(matrix[i - 1][k]){ arr[i][k] += 1 };
                  if(matrix[i - 1][k + 1]){ arr[i][k] += 1 };
                  if(matrix[i][k + 1]){ arr[i][k] += 1 };
                  if(matrix[i + 1][k + 1]){ arr[i][k] += 1 };
                  if(matrix[i + 1][k]){ arr[i][k] += 1 };
              }
              if(k > 0 && k < matrix[i].length - 1){
                  if(matrix[i - 1][k]){ arr[i][k] += 1 };
                  if(matrix[i - 1][k + 1]){ arr[i][k] += 1 };
                  if(matrix[i][k + 1]){ arr[i][k] += 1 };
                  if(matrix[i + 1][k + 1]){ arr[i][k] += 1 };
                  if(matrix[i + 1][k]){ arr[i][k] += 1 };
                  if(matrix[i + 1][k - 1]){ arr[i][k] += 1 };
                  if(matrix[i][k - 1]){ arr[i][k] += 1 };
                  if(matrix[i - 1][k - 1]){ arr[i][k] += 1 };
              }
              if(k == matrix[i].length - 1){
                  if(matrix[i + 1][k]){ arr[i][k] += 1 };
                  if(matrix[i + 1][k - 1]){ arr[i][k] += 1 };
                  if(matrix[i][k - 1]){ arr[i][k] += 1 };
                  if(matrix[i - 1][k - 1]){ arr[i][k] += 1 };
                  if(matrix[i - 1][k]){ arr[i][k] += 1 };
              }
          }
          if(i == matrix.length - 1){
              if(k == 0){
                  if(matrix[i - 1][k]){ arr[i][k] += 1 };
                  if(matrix[i - 1][k + 1]){ arr[i][k] += 1 };
                  if(matrix[i][k + 1]){ arr[i][k] += 1 };
              }
              if(k > 0 && k < matrix[i].length - 1){
                  if(matrix[i][k - 1]){ arr[i][k] += 1 };
                  if(matrix[i - 1][k - 1]){ arr[i][k] += 1 };
                  if(matrix[i - 1][k]){ arr[i][k] += 1 };
                  if(matrix[i - 1][k + 1]){ arr[i][k] += 1 };
                  if(matrix[i][k + 1]){ arr[i][k] += 1 };
              }
              if(k == matrix[i].length - 1){
                  if(matrix[i][k - 1]){ arr[i][k] += 1 };
                  if(matrix[i - 1][k - 1]){ arr[i][k] += 1 };
                  if(matrix[i - 1][k]){ arr[i][k] += 1 };
              }
          }
      }
  }
  return arr;
}

module.exports = {
  minesweeper
};
