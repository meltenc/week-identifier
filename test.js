/**
 * week-idnetifier <https://github.com/throll/week-identifier>
 *
 * Copyright (c) 2016 Clément Billiot, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('chai').assert;
var chai = require('chai');
chai.use(require('chai-datetime'));
var weekIdentifier = require('./index');

describe('week-identifier:', function() {
  it('should receive valid date format string', function(done) {
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

    done();
  });
  it('should receive date object', function(done) {
    assert.strictEqual(weekIdentifier(new Date('January 05, 1970 03:24:00')), 1);
    assert.strictEqual(weekIdentifier(new Date('August 19, 2016')), 2433);
    done();
  });
  it('should get current week identifier when empty string format', function(done) {
    assert.strictEqual(typeof weekIdentifier(''), 'number');
    done();
  });
  it('should get current week identifier, if no valid Date format or Date Object', function(done) {
    assert.strictEqual(typeof weekIdentifier(/regex/g), 'number');
    assert.strictEqual(typeof weekIdentifier(true), 'number');
    assert.strictEqual(typeof weekIdentifier(false), 'number');
    assert.strictEqual(typeof weekIdentifier(222), 'number');
    assert.strictEqual(typeof weekIdentifier({
      obj: 123
    }), 'number');
    assert.strictEqual(typeof weekIdentifier([1, 2, 3]), 'number');
    assert.strictEqual(typeof weekIdentifier(), 'number');
    done();
  });

  it('should get date from week identifier', function(done) {
    assert.isNaN(weekIdentifier.dateFromWeek(''));
    assert.isNaN(weekIdentifier.dateFromWeek('abc'));
    assert.equalDate(weekIdentifier.dateFromWeek(-2897), new Date('January 05, 1970 00:00:00'));
    assert.equalDate(weekIdentifier.dateFromWeek('0'), new Date('January 05, 1970 00:00:00'));
    assert.equalDate(weekIdentifier.dateFromWeek('1'), new Date('January 05, 1970 00:00:00'));
    assert.equalDate(weekIdentifier.dateFromWeek('2'), new Date('January 12, 1970 00:00:00'));
    assert.equalDate(weekIdentifier.dateFromWeek('2403'), new Date('January 18, 2016 00:00:00'));
    assert.equalDate(weekIdentifier.dateFromWeek('2404'), new Date('January 25, 2016 00:00:00'));
    done();
  });
});
