'use strict';

var Mnemonic = require('./lib/mnemonic');

Mnemonic.version = 'v' + require('./package.json').version;

module.exports = Mnemonic;
