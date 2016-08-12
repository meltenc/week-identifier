/**
 * current-week-identifier <https://github.com/throll/current-week-identifier>
 *
 * Copyright (c) 2016-2017 Clément Billiot, contributors.
 * Released under the MIT license.
 */

'use strict';

/**
 * Get unique and sequential current week identifier or given valid `Date` string format
 *
 * **Example:**
 *
 * ```js
 * var currentWeekIdentifier = require('current-week-number');
 *
 * // august 12, 2016
 * currentWeekIdentifier();
 * //=> 2432
 *
 * currentWeekIdentifier('January 05, 1970 03:00:00');
 * //=> 1
 *
 * currentWeekIdentifier(new Date('August 12, 2016'));
 * //=> 2432
 *
 * currentWeekIdentifier('08/12/2016');
 * //=> 2432
 *
 * currentWeekIdentifier('August 12, 2016');
 * //=> 2432
 *
 * currentWeekIdentifier(new Date('August 19, 2016'));
 * //=> 2433
 *
 * currentWeekIdentifier('08/19/2016');
 * //=>  2433
 * ```
 *
 * @name currentWeekIdentifier
 * @param  {String} `[date]` every valid Date-ish string format
 * @return {Number}
 * @api public
 */
module.exports = function currentWeekIdentifier(date) {
  var instance;

  if (typeof date === 'string' && date.length) {
    instance = new Date(date);
  } else if (date instanceof Date) {
    instance = date;
  } else {
    instance = new Date();
  }

  // Create a copy of this date object
  var target = new Date(instance.valueOf());
  // Starting date point for our sequence
  var firstDayOfWeekOne = new Date('January 4, 1970 23:59:59.999');
  // Number of week from our starting date
  var weekNumberdiff = Math.ceil((target.getTime() - firstDayOfWeekOne.getTime()) / (24 * 3600 * 1000 * 7));

  return weekNumberdiff;
};
