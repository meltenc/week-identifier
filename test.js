/**
 * current-week-idnetifier <https://github.com/throll/current-week-identifier>
 *
 * Copyright (c) 2016 Clément Billiot, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var currentWeekIdentifier = require('./index');

describe('current-week-number:', function() {
  it('should receive valid date format string', function(done) {
    assert.strictEqual(currentWeekIdentifier('January 05, 1970 03:24:00'), 1);
    assert.strictEqual(currentWeekIdentifier('January 11, 1970 23:59:59'), 1);
    assert.strictEqual(currentWeekIdentifier('January 12, 1970 00:00:00'), 2);
    assert.strictEqual(currentWeekIdentifier('January 12, 1970'), 2);
    assert.strictEqual(currentWeekIdentifier('January 14, 1970'), 2);
    assert.strictEqual(currentWeekIdentifier('01/14/1970'), 2);
    assert.strictEqual(currentWeekIdentifier('January 20, 1970 00:00:01'), 3);
    assert.strictEqual(currentWeekIdentifier('January 20, 2016 00:00:01'), 2403);
    assert.strictEqual(currentWeekIdentifier('January 26, 2016 00:00:00'), 2404);
    assert.strictEqual(currentWeekIdentifier('August 12, 2016'), 2432);
    assert.strictEqual(currentWeekIdentifier('02/17/2012'), 2198);

    done();
  });
  it('should receive date object', function(done) {
    assert.strictEqual(currentWeekIdentifier(new Date('January 05, 1970 03:24:00')), 1);
    assert.strictEqual(currentWeekIdentifier(new Date('August 19, 2016')), 2433);
    done();
  });
  it('should get current week number when empty string format', function(done) {
    assert.strictEqual(typeof currentWeekIdentifier(''), 'number');
    done();
  });
  it('should get current week number, if no valid Date format or Date Object', function(done) {
    assert.strictEqual(typeof currentWeekIdentifier(/regex/g), 'number');
    assert.strictEqual(typeof currentWeekIdentifier(true), 'number');
    assert.strictEqual(typeof currentWeekIdentifier(false), 'number');
    assert.strictEqual(typeof currentWeekIdentifier(222), 'number');
    assert.strictEqual(typeof currentWeekIdentifier({
      obj: 123
    }), 'number');
    assert.strictEqual(typeof currentWeekIdentifier([1, 2, 3]), 'number');
    assert.strictEqual(typeof currentWeekIdentifier(), 'number');
    done();
  });
});
