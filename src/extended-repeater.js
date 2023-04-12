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
function repeater( str, options ) {
  let reStr = String(str);
  if ("addition" in options) reStr += options.addition;
  if ("additionRepeatTimes" in options) {
      for (let i = 1; i < options.additionRepeatTimes; i++) {
          if ("additionSeparator" in options) {
              reStr += options.additionSeparator;
          } else {
              reStr += "|";
          }
          reStr += options.addition;
      }
  }
  if ("repeatTimes" in options) {
      for (let j = 1; j < options.repeatTimes; j++) {
          if ("separator" in options) {
              reStr += options.separator; 
          } else {
              reStr += "+";
          }
          reStr += str;
          if ("addition" in options) reStr += options.addition;
          if ("additionRepeatTimes" in options) {
              for (let i = 1; i < options.additionRepeatTimes; i++) {
                  if ("additionSeparator" in options) {
                      reStr += options.additionSeparator;
                  } else {
                      reStr += "|";
                  }
                  reStr += options.addition;
              }
          }
      }
  }
  return reStr;
}

module.exports = {
  repeater
};
