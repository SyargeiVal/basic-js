const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( sampleActivity ) {
  let vr = sampleActivity;
    if (typeof vr !== "string") {
        return false;
    } else if ( parseFloat(vr) || parseInt(vr) ) {
        vr = Number(vr);
        if (vr >= 1 && vr < 15) { 
            let t = Math.log(15 / vr) / (0.693147 / 5730);
            return Math.ceil(t);
        } 
    } else {
        return false;
    }
    return false;
}

module.exports = {
  dateSample
};
