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
const args = process.argv.slice(2);

const help = () => {
  console.log(`
  ${pkg.name} v${pkg.version}
  ${pkg.description}

  Usage:
    $ week-identifier [date]
    $ week-identifier [options]

  Options:
    --help, -h     Show this help message
    --version, -v  Show version number
    --from <id>    Get Monday date from week identifier

  Examples:
    $ week-identifier                    # Current week
    $ week-identifier "January 5, 1970"   # Week 1
    $ week-identifier "August 12, 2016"   # Week 2432
    $ week-identifier "02/17/2012"        # Week 2198
    $ week-identifier --from 2432        # Get date from week ID
  `);
};

// Parse command line arguments
const parseArgs = (args) => {
  const options = {
    help: false,
    version: false,
    from: null,
    date: null,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else if (arg === '--version' || arg === '-v') {
      options.version = true;
    } else if (arg === '--from') {
      if (i + 1 < args.length) {
        options.from = args[i + 1];
        i++; // Skip next argument
      } else {
        throw new Error('--from requires a week identifier');
      }
    } else if (!arg.startsWith('--')) {
      // Treat as date input
      options.date = options.date ? `${options.date} ${arg}` : arg;
    } else {
      throw new Error(`Unknown option: ${arg}`);
    }
  }

  return options;
};

try {
  const options = parseArgs(args);

  if (options.help) {
    help();
    process.exit(0);
  }

  if (options.version) {
    console.log(pkg.version);
    process.exit(0);
  }

  if (options.from !== null) {
    const date = weekIdentifier.dateFromWeek(options.from);
    // Format as YYYY-MM-DD using local timezone
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    console.log(`${year}-${month}-${day}`);
  } else {
    const result = weekIdentifier(options.date);
    console.log(result);
  }
} catch (error) {
  console.error(`Error: ${error.message}`);
  console.error('Use --help for usage information.');
  process.exit(1);
}
