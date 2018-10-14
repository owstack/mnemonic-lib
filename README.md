BIP39 Mnemonics
=======

[![NPM Package](https://img.shields.io/npm/v/mnemonic-lib.svg?style=flat-square)](https://www.npmjs.org/package/mnemonic-lib)
[![Build Status](https://img.shields.io/travis/owstack/mnemonic-lib.svg?branch=master&style=flat-square)](https://travis-ci.org/owstack/mnemonic-lib)
[![Coverage Status](https://img.shields.io/coveralls/owstack/mnemonic-lib.svg?style=flat-square)](https://coveralls.io/r/owstack/mnemonic-lib)

A module that implements [Mnemonic code for generating deterministic keys](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).

## Getting Started

This library is distributed in both the npm and bower packaging systems.

```sh
npm install mnemonic-lib
bower install mnemonic-lib
```

The following code generates a new random mnemonic code and convert it to a `HDPrivateKey`.

```javascript
var Mnemonic = require('@owstack/mnemonic-lib');
var code = new Mnemonic(Mnemonic.Words.SPANISH);
code.toString(); // natal hada sutil año sólido papel jamón combate aula flota ver esfera...
var xpriv = code.toHDPrivateKey();
```

## Contributing

See [CONTRIBUTING.md](https://github.com/owstack/btc/blob/master/CONTRIBUTING.md) on the main btc repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/owstack/btc/blob/master/LICENSE).

Copyright 2018 Open Wallet Stack.
