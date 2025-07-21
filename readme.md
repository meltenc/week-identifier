## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Get unique and sequential week identifier for any date. Modern ES6+ with robust error handling.

Week #1 starts on January 5, 1970 (Monday). Each week runs Monday to Sunday.

## Install
```bash
npm install week-identifier

# Test the installation
npm test

# Try the CLI
week-identifier --help
```


## API
> For comprehensive test examples see [test.js](./test.js) and [test-cli.js](./test-cli.js)

### weekIdentifier(date?)
> Get sequential week identifier for any date

- **date** `{string|Date}` - Date string (any valid format) or Date object (optional, defaults to current date)
- **returns** `{number}` - Sequential week identifier (1-based)
- **throws** `{Error}` - When provided date is invalid

**Examples:**

```js
const weekIdentifier = require('week-identifier');

// Current week (depends on today's date)
weekIdentifier();
//=> 2433

// Week 1 (epoch start)
weekIdentifier('January 5, 1970');
//=> 1

// Various date formats supported
weekIdentifier('January 12, 1970');
//=> 2

weekIdentifier(new Date('August 12, 2016'));
//=> 2432

weekIdentifier('08/12/2016');
//=> 2432

weekIdentifier('August 12, 2016');
//=> 2432

// Error handling for invalid dates
try {
  weekIdentifier('invalid date');
} catch (error) {
  console.error(error.message);
  //=> 'Invalid date string: "invalid date"'
}
```

### weekIdentifier.dateFromWeek(weekId)
> Convert week identifier back to its Monday date

- **weekId** `{number|string}` - Week identifier to convert
- **returns** `{Date}` - Monday date of the specified week
- **throws** `{Error}` - When weekId is not a valid number

**Examples:**

```js
const weekIdentifier = require('week-identifier');

// Get Monday of week 2433
weekIdentifier.dateFromWeek(2433);
//=> Date object for August 15, 2016 00:00:00

// Week 1 returns epoch start
weekIdentifier.dateFromWeek(1);
//=> Date object for January 5, 1970 00:00:00

// Week 0 or negative returns epoch start
weekIdentifier.dateFromWeek(0);
//=> Date object for January 5, 1970 00:00:00

// Error handling
try {
  weekIdentifier.dateFromWeek('abc');
} catch (error) {
  console.error(error.message);
  //=> 'Invalid week identifier: "abc"'
}
```

## CLI Usage

The package includes a powerful command-line interface with enhanced argument parsing.

### Installation & Usage

```bash
# Install globally for CLI access
npm install -g week-identifier

# Or use without installing
npx week-identifier
```

### Commands & Options

```bash
# Get current week identifier
week-identifier
#=> 2433

# Get week identifier for specific dates  
week-identifier "January 5, 1970"
#=> 1

week-identifier "August 12, 2016"  
#=> 2432

week-identifier "02/17/2012"
#=> 2198

# Convert week identifier back to date
week-identifier --from 2432
#=> 2016-08-08

week-identifier --from 1
#=> 1970-01-05

# Get help and version info
week-identifier --help
week-identifier --version
```

### Error Handling

```bash
# Invalid date strings show helpful errors
week-identifier "invalid date"
#=> Error: Invalid date string: "invalid date"
#=> Use --help for usage information.

# Invalid week identifiers are caught
week-identifier --from abc  
#=> Error: Invalid week identifier: "abc"
#=> Use --help for usage information.
```


## License [![MIT license][license-img]][license-url]
Copyright (c) 2016 [Clément Billiot], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/week-identifier
[npmjs-img]: https://img.shields.io/npm/v/week-identifier.svg?style=flat&label=week-identifier

[coveralls-url]: https://coveralls.io/r/throll/week-identifier?branch=master
[coveralls-img]: https://img.shields.io/coveralls/throll/week-identifier.svg?style=flat

[license-url]: https://github.com/throll/week-identifier/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/throll/week-identifier
[travis-img]: https://img.shields.io/travis/throll/week-identifier.svg?style=flat

[daviddm-url]: https://david-dm.org/throll/week-identifier
[daviddm-img]: https://img.shields.io/david/dev/throll/week-identifier.svg?style=flat

[author-github]: https://github.com/throll

[contrib-graf]: https://github.com/throll/week-identifier/graphs/contributors

***
