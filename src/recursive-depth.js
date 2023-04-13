const { NotImplementedError } = require('../extensions/index.js');

/**
 *  
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      if (arr.length === 0) return 1;
      const res = arr.map(el => this.calculateDepth(el));
      return Math.max(...res) + 1;
    } else {
      return 0;
    }
  }
}

module.exports = {
  DepthCalculator
};
