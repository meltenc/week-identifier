#!/usr/bin/env node

/**
 * current-week-identifier <https://github.com/throll/current-week-identifier>
 *
 * Copyright (c) 2016-2017 Clément Billiot, contributors.
 * Released under the MIT license.
 */

'use strict';

var pkg = require('./package.json');
var currentWeekIdentifier = require('./');
var argv = process.argv.slice(2);

function help() {
  console.log([
    '',
    '  ' + pkg.description,
    '',
    '  Example',
    '    $ current-week-identifier January 5, 1970',
    '    1',
    '    $ current-week-identifier August 12, 2016',
    '    2432',
    '    $ current-week-identifier 02/17/2012',
    '    2198',
    '    $ current-week-identifier',
    '    2433'
  ].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
  return help();
}

if (argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

console.log(currentWeekIdentifier(argv.join('')));
