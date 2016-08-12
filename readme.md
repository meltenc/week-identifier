## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Get unique and sequential current week identifier or given valid `Date` string format or Date object.

## Install
```
npm i --save current-week-identifier
npm test
current-week-identifier --help
```


## API
> For more use-cases see the [tests](./test.js)

### [currentWeekIdentifier](./index.js#L40)
> Get unique and sequential current week identifier or given valid `Date` string format

- `[date]` **{String}** every valid Date-ish string format
- `return` **{Number}**

**Example:**

```js
var currentWeekIdentifier = require('current-week-identifier');

 // august 12, 2016
currentWeekIdentifier();
//=> 2432

currentWeekIdentifier('January 05, 1970 03:00:00');
//=> 1

currentWeekIdentifier(new Date('August 12, 2016'));
//=> 2432

currentWeekIdentifier('08/12/2016');
//=> 2432

currentWeekIdentifier('August 12, 2016');
//=> 2432

currentWeekIdentifier(new Date('August 19, 2016'));
//=> 2433

currentWeekIdentifier('08/19/2016');
 //=>  2433
```


## CLI
> You can just run `current-week-identifier --help` for more information


## License [![MIT license][license-img]][license-url]
Copyright (c) 2016 [Clément Billiot], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/current-week-identifier
[npmjs-img]: https://img.shields.io/npm/v/current-week-identifier.svg?style=flat&label=current-week-identifier

[coveralls-url]: https://coveralls.io/r/throll/current-week-identifier?branch=master
[coveralls-img]: https://img.shields.io/coveralls/throll/current-week-identifier.svg?style=flat

[license-url]: https://github.com/throll/current-week-identifier/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/datetime/current-week-number
[travis-img]: https://img.shields.io/travis/datetime/current-week-number.svg?style=flat

[daviddm-url]: https://david-dm.org/throll/current-week-identifier
[daviddm-img]: https://img.shields.io/david/dev/throll/current-week-identifier.svg?style=flat

[author-github]: https://github.com/throll

[contrib-graf]: https://github.com/throll/current-week-identifier/graphs/contributors

***
