/**
 * week-identifier <https://github.com/throll/week-identifier>
 *
 * Copyright (c) 2016 Clément Billiot, contributors.
 * Released under the MIT license.
 */

'use strict';

// Constants for better performance
const EPOCH_START = new Date('January 5, 1970 00:00:00');
const EPOCH_START_TIMESTAMP = EPOCH_START.getTime() - 1;
const MILLISECONDS_PER_WEEK = 24 * 3600 * 1000 * 7;

module.exports = weekIdentifier;
module.exports.weekIdentifier = weekIdentifier;
module.exports.dateFromWeek = dateFromWeek;

/**
 * Get unique and sequential week identifier of current date or given valid `Date` string format
 *
 * **Example:**
 *
 * ```js
 * var weekIdentifier = require('current-week-number');
 *
 * // august 12, 2016 (current date)
 * weekIdentifier();
 * //=> 2432
 *
 * weekIdentifier('January 05, 1970 03:00:00');
 * //=> 1
 *
 * weekIdentifier(new Date('August 12, 2016'));
 * //=> 2432
 *
 * weekIdentifier('08/12/2016');
 * //=> 2432
 *
 * weekIdentifier('August 12, 2016');
 * //=> 2432
 *
 * weekIdentifier(new Date('August 19, 2016'));
 * //=> 2433
 *
 * weekIdentifier('08/19/2016');
 * //=>  2433
 * ```
 *
 * @name weekIdentifier
 * @param  {String} `[date]` every valid Date-ish string format
 * @return {Number}
 * @api public
 */
function weekIdentifier(date) {
  let instance;

  if (typeof date === 'string' && date.length) {
    instance = new Date(date);
    // Check if the date is valid
    if (isNaN(instance.getTime())) {
      throw new Error(`Invalid date string: "${date}"`);
    }
  } else if (date instanceof Date) {
    // Check if the Date object is valid
    if (isNaN(date.getTime())) {
      throw new Error('Invalid Date object provided');
    }
    instance = date;
  } else {
    instance = new Date();
  }

  // Create a copy of this date object
  const target = new Date(instance.valueOf());
  // Number of weeks from our starting date
  const weekNumberDiff = Math.ceil(
    (target.getTime() - EPOCH_START_TIMESTAMP) / MILLISECONDS_PER_WEEK
  );

  return weekNumberDiff;
}

/**
 * Get monday date of the given week identifier
 *
 *  * **Example:**
 *
 * ```js
 * var weekIdentifier = require('current-week-number');
 *
 * weekIdentifier.dateFromWeek(2403);
 * //=> January 18, 2016 00:00:00
 *
 * ```
 * @name weekIdentifier.dateFromWeek
 * @param  {Number} weekIdentifier
 * @return {Date} Monday of the given week identifier or January 5, 1970 00:00:00 if weekIdentifier is not > 0.
 */
function dateFromWeek(weekIdentifier) {
  const weekNum = parseFloat(weekIdentifier);

  if (isNaN(weekNum)) {
    throw new Error(`Invalid week identifier: "${weekIdentifier}"`);
  }

  // Starting date point for our sequence
  let mondayOfWeek = new Date(EPOCH_START.getTime());

  if (weekNum > 0) {
    const additionalMilliseconds = (weekNum - 1) * MILLISECONDS_PER_WEEK;
    mondayOfWeek = new Date(EPOCH_START.getTime() + additionalMilliseconds);
  }

  return mondayOfWeek;
}
