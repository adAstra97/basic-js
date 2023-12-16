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
  constructor(isDirectMachine = true) {
    this.isDirectMachine = isDirectMachine;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let keyIdx = 0;
    let result = '';

    for (let i = 0; i < message.length; i++) {
      let charCodeLetter = message.charCodeAt(i);

      if (charCodeLetter >= 65 && charCodeLetter <= 90) {
        let meaningNum = charCodeLetter - 65;
        let meaningKey = key.charCodeAt(keyIdx % key.length) - 65;
        let module = (meaningNum + meaningKey) % 26;

        result += String.fromCharCode(module + 65);

        keyIdx++;
      } else {
        result += message[i];
      }

    }

    return this.isDirectMachine ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let keyIdx = 0;
    let result = '';

    for (let i = 0; i < encryptedMessage.length; i++) {
        let charCodeLetter = encryptedMessage.charCodeAt(i);

        if (charCodeLetter >= 65 && charCodeLetter <= 90) {
            let meaningNum = charCodeLetter - 65;
            let meaningKey = key.charCodeAt(keyIdx % key.length) - 65;
            let numForModule = meaningNum - meaningKey;
            let module;

            if (numForModule > 0) {
                module = numForModule % 26;
            } else {
                module = (numForModule + 26) % 26;
            }

            result += String.fromCharCode(module + 65);
            keyIdx++;
        } else {
            result += encryptedMessage[i];
        }
    }

    return this.isDirectMachine ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
