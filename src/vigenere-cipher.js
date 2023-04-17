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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let keyIndex = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      const messageIndex = alphabet.indexOf(messageChar);

      if (messageIndex === -1) {
        result += messageChar;
        continue;
      }

      const keyChar = key[keyIndex % key.length];
      const keyIndexInAlphabet = alphabet.indexOf(keyChar);
      const encryptedIndex = (messageIndex + keyIndexInAlphabet) % alphabet.length;
      const encryptedChar = alphabet[encryptedIndex];

      result += encryptedChar;
      keyIndex++;
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let keyIndex = 0;

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < encryptedMessage.length; i++) {
      const encryptedChar = encryptedMessage[i];
      const encryptedIndex = alphabet.indexOf(encryptedChar);

      if (encryptedIndex === -1) {
        result += encryptedChar;
        continue;
      }

      const keyChar = key[keyIndex % key.length];
      const keyIndexInAlphabet = alphabet.indexOf(keyChar);
      const messageIndex = (encryptedIndex - keyIndexInAlphabet + alphabet.length) % alphabet.length;
      const messageChar = alphabet[messageIndex];

      result += messageChar;
      keyIndex++;
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
