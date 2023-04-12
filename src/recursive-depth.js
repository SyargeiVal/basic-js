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
    let count = 0, num = getNesting(arr);
    function getNesting(array){
        if(!Array.isArray(array)){ return; }
        for( let el of array){
            if(Array.isArray(el)){
                count = count + 1;
                return getNesting(el);
            }
        }
        return count = count + 1;
    }
    return num;
  }
}

module.exports = {
  DepthCalculator
};
