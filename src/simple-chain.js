const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${value} )~~`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' ||
        position < 1 || position > this.result.length ||
        !isFinite(position)) throw Error("You can't remove incorrect link!");
    const currRes = this.result.filter((el, ind) => position !== ind + 1);
    this.result = currRes;
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    const ret = this.result.join('');
    this.result = [];
    return ret.slice(0, ret.length - 2);
  }
};

module.exports = {
  chainMaker
};
