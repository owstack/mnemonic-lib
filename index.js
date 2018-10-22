'use strict';

var mnemonicLib = {};

// module information
mnemonicLib.version = 'v' + require('./package.json').version;

// main mnemonic library
mnemonicLib.mnemonic = require('./lib/mnemonic');

module.exports = mnemonicLib;
