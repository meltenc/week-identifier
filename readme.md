# week-identifier

[![npm][npmjs-img]][npmjs-url] [![license][license-img]][license-url] [![build][build-img]][build-url] [![codecov][codecov-img]][codecov-url] [![downloads][downloads-img]][downloads-url]

> Unique, sequential week number for any date. Zero dependencies, with a CLI.

Week #1 starts on Monday, January 5, 1970. Weeks run Monday to Sunday and are counted in **local time**, so a week always changes at Monday 00:00 on the user's clock, daylight saving time included.

Handy as a stable key for weekly data: `2949` is easier to store, sort and compare than "year + ISO week".

## Install

```bash
npm install week-identifier
```

Requires Node.js 22 or later.

## API

```js
const weekIdentifier = require('week-identifier');
// or: import weekIdentifier, { dateFromWeek } from 'week-identifier';
```

### weekIdentifier(date?)

Returns the week identifier for a date.

- **date** `{string|Date}` – any date string `new Date()` understands, or a `Date`. Optional; defaults to now.
- **returns** `{number}` – sequential week identifier (1 = week of January 5, 1970)
- **throws** `{Error}` – when the string or `Date` is invalid

```js
weekIdentifier();                            //=> current week, e.g. 2964
weekIdentifier('January 5, 1970');           //=> 1
weekIdentifier('January 12, 1970');          //=> 2
weekIdentifier('August 12, 2016');           //=> 2432
weekIdentifier('08/12/2016');                //=> 2432
weekIdentifier(new Date('August 12, 2016')); //=> 2432

weekIdentifier('invalid date');
//=> throws Error: Invalid date string: "invalid date"
```

> [!NOTE]
> JavaScript parses date-only ISO strings such as `'2026-07-06'` as **UTC** midnight, not local midnight. West of UTC, that can land on the previous day and therefore the previous week. Use `'2026-07-06T00:00'` or `new Date(2026, 6, 6)` for a local date.

### weekIdentifier.dateFromWeek(weekId)

Returns the Monday (00:00 local time) that starts the given week.

- **weekId** `{number|string}` – week identifier
- **returns** `{Date}` – Monday of that week; identifiers ≤ 0 return January 5, 1970
- **throws** `{Error}` – when `weekId` is not a number

```js
weekIdentifier.dateFromWeek(2433); //=> Mon Aug 15 2016 00:00:00
weekIdentifier.dateFromWeek(1);    //=> Mon Jan 05 1970 00:00:00
weekIdentifier.dateFromWeek(0);    //=> Mon Jan 05 1970 00:00:00

weekIdentifier.dateFromWeek('abc');
//=> throws Error: Invalid week identifier: "abc"
```

## CLI

```bash
npx week-identifier                    # current week
npx week-identifier "January 5, 1970"  #=> 1
npx week-identifier "02/17/2012"       #=> 2198
npx week-identifier --from 2432        #=> 2016-08-08 (Monday of that week)
npx week-identifier --help
npx week-identifier --version
```

Invalid input prints an error to stderr and exits with code 1:

```bash
npx week-identifier --from abc
#=> Error: Invalid week identifier: "abc"
#=> Use --help for usage information.
```

Install globally with `npm install -g week-identifier` to drop the `npx`.

## Development

```bash
npm ci
npm test          # mocha + nyc coverage
npm run lint
npm run format
```

More examples in [test.js][test-url] and [test-cli.js][test-cli-url].

## License

Copyright (c) 2016-2025 [Clément Billiot][author-github] and [contributors][contrib-graf]. Released under the [MIT license][license-url].

[npmjs-url]: https://www.npmjs.com/package/week-identifier
[npmjs-img]: https://img.shields.io/npm/v/week-identifier.svg?style=flat
[license-url]: https://github.com/meltenc/week-identifier/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[build-url]: https://github.com/meltenc/week-identifier/actions/workflows/ci.yml
[build-img]: https://img.shields.io/github/actions/workflow/status/meltenc/week-identifier/ci.yml?branch=master&style=flat
[codecov-url]: https://codecov.io/gh/meltenc/week-identifier
[codecov-img]: https://img.shields.io/codecov/c/github/meltenc/week-identifier?style=flat
[downloads-url]: https://www.npmjs.com/package/week-identifier
[downloads-img]: https://img.shields.io/npm/dm/week-identifier.svg?style=flat
[author-github]: https://github.com/meltenc
[contrib-graf]: https://github.com/meltenc/week-identifier/graphs/contributors
[test-url]: https://github.com/meltenc/week-identifier/blob/master/test.js
[test-cli-url]: https://github.com/meltenc/week-identifier/blob/master/test-cli.js
