## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Get unique and sequential current week identifier for given valid `Date` string format or Date object.
Week #1 is starting on January 05, 1970.

## Install
```
npm i --save week-identifier
npm test
week-identifier --help
```


## API
> For more use-cases see the [tests](./test.js)

### [weekIdentifier](./index.js#L50)
> Get unique and sequential current week identifier for given valid `Date` string format

- `[date]` **{String}** every valid Date-ish string format
- `return` **{Number}**

**Example:**

```js
var weekIdentifier = require('week-identifier');

 // august 12, 2016
weekIdentifier();
//=> 2432

weekIdentifier('January 05, 1970 00:00:00');
//=> 1

weekIdentifier('January 12, 1970 00:00:00');
//=> 2

weekIdentifier(new Date('August 12, 2016'));
//=> 2432

weekIdentifier('08/12/2016');
//=> 2432

weekIdentifier('August 12, 2016');
//=> 2432

weekIdentifier(new Date('August 19, 2016'));
//=> 2433

```

### [weekIdentifier.dateFromWeek](./index.js#L86)
> Get monday date of the given week identifier or January 5, 1970 00:00:00 if weekIdentifier is <= 1.

- `[number]` **{String}** every valid number > 0
- `return` **{Date}**

**Example:**

```js
var weekIdentifier = require('week-identifier');

weekIdentifier.dateFromWeek(2433);
//=> August 15, 2016 00:00:00

weekIdentifier.dateFromWeek(1);
//=> January 05, 1970 00:00:00

```

## CLI
> You can just run `week-identifier --help` for more information


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
