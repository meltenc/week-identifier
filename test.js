/**
 * week-identifier <https://github.com/meltenc/week-identifier>
 *
 * Copyright (c) 2016-2025 Clément Billiot, contributors.
 * Released under the MIT license.
 */

'use strict';

const assert = require('chai').assert;
const chai = require('chai');
chai.use(require('chai-datetime'));
const weekIdentifier = require('./index');

describe('week-identifier:', () => {
  it('should receive valid date format string', () => {
    assert.strictEqual(weekIdentifier('January 05, 1970 03:24:00'), 1);
    assert.strictEqual(weekIdentifier('January 11, 1970 23:59:59'), 1);
    assert.strictEqual(weekIdentifier('January 12, 1970 00:00:00'), 2);
    assert.strictEqual(weekIdentifier('January 12, 1970'), 2);
    assert.strictEqual(weekIdentifier('January 14, 1970'), 2);
    assert.strictEqual(weekIdentifier('01/14/1970'), 2);
    assert.strictEqual(weekIdentifier('January 20, 1970 00:00:01'), 3);
    assert.strictEqual(weekIdentifier('January 20, 2016 00:00:00'), 2403);
    assert.strictEqual(weekIdentifier('January 26, 2016 00:00:00'), 2404);
    assert.strictEqual(weekIdentifier('August 12, 2016'), 2432);
    assert.strictEqual(weekIdentifier('02/17/2012'), 2198);
  });
  it('should receive date object', () => {
    assert.strictEqual(
      weekIdentifier(new Date('January 05, 1970 03:24:00')),
      1
    );
    assert.strictEqual(weekIdentifier(new Date('August 19, 2016')), 2433);
  });

  it('should throw error for invalid date string', () => {
    assert.throws(
      () => weekIdentifier('invalid date string'),
      Error,
      'Invalid date string: "invalid date string"'
    );
    assert.throws(
      () => weekIdentifier('2025-13-45'), // Invalid date
      Error,
      'Invalid date string'
    );
  });

  it('should throw error for invalid Date object', () => {
    const invalidDate = new Date('invalid');
    assert.throws(
      () => weekIdentifier(invalidDate),
      Error,
      'Invalid Date object provided'
    );
  });
  it('should get current week identifier when empty string format', () => {
    assert.strictEqual(typeof weekIdentifier(''), 'number');
  });
  it('should get current week identifier, if no valid Date format or Date Object', () => {
    assert.strictEqual(typeof weekIdentifier(/regex/g), 'number');
    assert.strictEqual(typeof weekIdentifier(true), 'number');
    assert.strictEqual(typeof weekIdentifier(false), 'number');
    assert.strictEqual(typeof weekIdentifier(222), 'number');
    assert.strictEqual(
      typeof weekIdentifier({
        obj: 123,
      }),
      'number'
    );
    assert.strictEqual(typeof weekIdentifier([1, 2, 3]), 'number');
    assert.strictEqual(typeof weekIdentifier(), 'number');
  });

  describe('across timezones and DST', () => {
    const originalTZ = process.env.TZ;
    after(() => {
      if (originalTZ === undefined) {
        delete process.env.TZ;
      } else {
        process.env.TZ = originalTZ;
      }
    });

    [
      'UTC',
      'Europe/Paris',
      'America/New_York',
      'Australia/Sydney',
      'Asia/Kolkata',
    ].forEach((tz) => {
      it(`should switch week at local Monday midnight in ${tz}`, () => {
        process.env.TZ = tz;
        // Summer and winter (northern hemisphere) around a Monday boundary
        assert.strictEqual(weekIdentifier('July 5, 2026 23:59:59'), 2948);
        assert.strictEqual(weekIdentifier('July 6, 2026 00:00:00'), 2949);
        assert.strictEqual(weekIdentifier('January 4, 2026 23:59:59'), 2922);
        assert.strictEqual(weekIdentifier('January 5, 2026 00:00:00'), 2923);
        assert.strictEqual(weekIdentifier('January 4, 1970 23:59:59'), 0);
        assert.strictEqual(weekIdentifier('January 5, 1970 00:00:00'), 1);

        assert.equalTime(
          weekIdentifier.dateFromWeek(2949),
          new Date('July 6, 2026 00:00:00')
        );
        assert.equalTime(
          weekIdentifier.dateFromWeek(2923),
          new Date('January 5, 2026 00:00:00')
        );
      });
    });
  });

  it('should get date from week identifier', () => {
    assert.throws(
      () => weekIdentifier.dateFromWeek(''),
      Error,
      'Invalid week identifier'
    );
    assert.throws(
      () => weekIdentifier.dateFromWeek('abc'),
      Error,
      'Invalid week identifier'
    );
    assert.equalDate(
      weekIdentifier.dateFromWeek(-2897),
      new Date('January 05, 1970 00:00:00')
    );
    assert.equalDate(
      weekIdentifier.dateFromWeek('0'),
      new Date('January 05, 1970 00:00:00')
    );
    assert.equalDate(
      weekIdentifier.dateFromWeek('1'),
      new Date('January 05, 1970 00:00:00')
    );
    assert.equalDate(
      weekIdentifier.dateFromWeek('2'),
      new Date('January 12, 1970 00:00:00')
    );
    assert.equalDate(
      weekIdentifier.dateFromWeek('2403'),
      new Date('January 18, 2016 00:00:00')
    );
    assert.equalDate(
      weekIdentifier.dateFromWeek('2404'),
      new Date('January 25, 2016 00:00:00')
    );
    assert.equalTime(
      weekIdentifier.dateFromWeek(2.5),
      new Date('January 12, 1970 00:00:00')
    );
    assert.equalTime(
      weekIdentifier.dateFromWeek('2403.9'),
      new Date('January 18, 2016 00:00:00')
    );
  });
});
