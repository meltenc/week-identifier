#!/usr/bin/env node

/**
 * week-identifier <https://github.com/throll/week-identifier>
 *
 * Copyright (c) 2016-2017 Clément Billiot, contributors.
 * Released under the MIT license.
 */

'use strict';

const pkg = require('./package.json');
const weekIdentifier = require('./');
const argv = process.argv.slice(2);

const help = () => {
  console.log(`
  ${pkg.description}

  Example
    $ week-identifier January 5, 1970
    1
    $ week-identifier August 12, 2016
    2432
    $ week-identifier 02/17/2012
    2198
    $ week-identifier
    2433`);
};

if (argv.indexOf('--help') !== -1) {
  return help();
}

if (argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

try {
  console.log(weekIdentifier(argv.join(' ')));
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
