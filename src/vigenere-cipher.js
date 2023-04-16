const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool;
  }
  a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  bool;
  encrypt(m, k) {
    if( m === undefined || k === undefined) throw Error('Incorrect arguments!');
    const mess = m.split(' ').join('');
    let res = '', j = 0;
    const maxlength = Math.max(m.length, k.length);
    for(let i = 0; i < maxlength; i++){
      let indM = (i >= m.length) ? i % m.length : i;
      let indK = (j >= k.length) ? j % k.length : j;
      const mi = this.a.indexOf(mess[j].toUpperCase());
      let ki = this.a.indexOf(k[indK].toUpperCase());
      console.log(ki);
      const c = this.a[ ( ( ( this.a.length + ( mi + ki ) ) % this.a.length ) ) ];	
      if (this.a.includes(m[i].toUpperCase())) {
        res += c;
        j += 1;
      } else {
        res += m[i];
      }
    }
    if (this.bool) {
      return res;
    } else {
      return res.split('').reverse().join('');
    }
  }
  decrypt(m, k) {
    if( m === undefined || k === undefined) throw Error('Incorrect arguments!');
    const mess = m.split(' ').join('');
    let res = '', j = 0;
    const maxlength = Math.max(m.length, k.length);
    for(let i = 0; i < maxlength; i++){
      let indM = (i >= m.length) ? i % m.length : i;
      let indK = (j >= k.length) ? j % k.length : j;
      const mi = this.a.indexOf(mess[j].toUpperCase());
      let ki = this.a.indexOf(k[indK].toUpperCase());
      ki = -ki;
      console.log(ki);
      const c = this.a[ ( ( ( this.a.length + ( mi + ki ) ) % this.a.length ) ) ];	
      if (this.a.includes(m[i].toUpperCase())) {
        res += c;
        j += 1;
      } else {
        res += m[i];
      }
    }
    if (this.bool) {
      return res;
    } else {
      return res.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
