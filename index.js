/**
 * week-identifier <https://github.com/meltenc/week-identifier>
 *
 * Copyright (c) 2016-2025 Clément Billiot, contributors.
 * Released under the MIT license.
 */

'use strict';

// Weeks are counted on local calendar days, via UTC to stay immune to DST shifts
const EPOCH_START_UTC = Date.UTC(1970, 0, 5);
const MILLISECONDS_PER_DAY = 24 * 3600 * 1000;

module.exports = weekIdentifier;
module.exports.weekIdentifier = weekIdentifier;
module.exports.dateFromWeek = dateFromWeek;

/**
 * Get unique and sequential week identifier of current date or given valid date
 *
 * Week counting starts from January 5, 1970 (week 1). Each week runs from Monday to Sunday.
 * If no date is provided, returns the current week number.
 *
 * @example
 * ```js
 * const weekIdentifier = require('week-identifier');
 *
 * // Current week
 * weekIdentifier();
 * //=> 2433 (depends on current date)
 *
 * // Week 1 (January 5, 1970 was a Monday)
 * weekIdentifier('January 05, 1970');
 * //=> 1
 *
 * weekIdentifier(new Date('August 12, 2016'));
 * //=> 2432
 *
 * weekIdentifier('08/12/2016');
 * //=> 2432
 * ```
 *
 * @param {string|Date} [date] - Date string (any valid format) or Date object. If omitted, uses current date.
 * @returns {number} The sequential week identifier (1-based)
 * @throws {Error} When provided date string or Date object is invalid
 * @since 1.0.0
 * @public
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

  const localDayUTC = Date.UTC(
    instance.getFullYear(),
    instance.getMonth(),
    instance.getDate()
  );
  const daysSinceEpoch = (localDayUTC - EPOCH_START_UTC) / MILLISECONDS_PER_DAY;

  return Math.floor(daysSinceEpoch / 7) + 1;
}

/**
 * Get the Monday date of a given week identifier
 *
 * Converts a week identifier back to its corresponding Monday date.
 * Week identifiers <= 0 return the epoch start date (January 5, 1970).
 *
 * @example
 * ```js
 * const weekIdentifier = require('week-identifier');
 *
 * // Get Monday of week 2403
 * weekIdentifier.dateFromWeek(2403);
 * //=> Date object for January 18, 2016 00:00:00
 *
 * // Week 1 returns the epoch start
 * weekIdentifier.dateFromWeek(1);
 * //=> Date object for January 5, 1970 00:00:00
 *
 * // Invalid or zero/negative values return epoch start
 * weekIdentifier.dateFromWeek(0);
 * //=> Date object for January 5, 1970 00:00:00
 * ```
 *
 * @param {number|string} weekIdentifier - The week identifier to convert
 * @returns {Date} Monday date of the specified week
 * @throws {Error} When weekIdentifier is not a valid number
 * @since 1.0.0
 * @public
 */
function dateFromWeek(weekIdentifier) {
  // Fractional ids are floored so the result is always a Monday
  const weekNum = Math.floor(parseFloat(weekIdentifier));

  if (isNaN(weekNum)) {
    throw new Error(`Invalid week identifier: "${weekIdentifier}"`);
  }

  // Local date arithmetic keeps the result at Monday 00:00 even across DST
  return new Date(1970, 0, 5 + (weekNum > 0 ? (weekNum - 1) * 7 : 0));
}
