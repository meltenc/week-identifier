'use strict';

const assert = require('chai').assert;
const { execSync } = require('child_process');

describe('week-identifier CLI:', () => {
  const cliPath = './cli.js';

  const runCLI = (args = '') => {
    try {
      const result = execSync(`node ${cliPath} ${args}`, {
        encoding: 'utf8',
        timeout: 5000,
      });
      return { stdout: result.trim(), stderr: '', exitCode: 0 };
    } catch (error) {
      return {
        stdout: error.stdout ? error.stdout.trim() : '',
        stderr: error.stderr ? error.stderr.trim() : '',
        exitCode: error.status || 1,
      };
    }
  };

  it('should show current week identifier with no arguments', () => {
    const result = runCLI();
    assert.strictEqual(result.exitCode, 0);
    assert.match(result.stdout, /^\d+$/); // Should be a number
  });

  it('should calculate correct week identifier for known dates', () => {
    const tests = [
      { date: '"January 5, 1970"', expected: '1' },
      { date: '"August 12, 2016"', expected: '2432' },
      { date: '"02/17/2012"', expected: '2198' },
    ];

    tests.forEach(({ date, expected }) => {
      const result = runCLI(date);
      assert.strictEqual(result.exitCode, 0);
      assert.strictEqual(result.stdout, expected);
    });
  });

  it('should show help with --help flag', () => {
    const result = runCLI('--help');
    assert.strictEqual(result.exitCode, 0);
    assert.include(result.stdout, 'week-identifier');
    assert.include(result.stdout, 'Usage:');
    assert.include(result.stdout, 'Examples:');
  });

  it('should show help with -h flag', () => {
    const result = runCLI('-h');
    assert.strictEqual(result.exitCode, 0);
    assert.include(result.stdout, 'Usage:');
  });

  it('should show version with --version flag', () => {
    const result = runCLI('--version');
    assert.strictEqual(result.exitCode, 0);
    assert.match(result.stdout, /^\d+\.\d+\.\d+$/); // Semver pattern
  });

  it('should show version with -v flag', () => {
    const result = runCLI('-v');
    assert.strictEqual(result.exitCode, 0);
    assert.match(result.stdout, /^\d+\.\d+\.\d+$/);
  });

  it('should convert week identifier to date with --from flag', () => {
    const result = runCLI('--from 1');
    assert.strictEqual(result.exitCode, 0);
    assert.strictEqual(result.stdout, '1970-01-05'); // ISO date format
  });

  it('should handle multiple word dates correctly', () => {
    const result = runCLI('January 12 1970');
    assert.strictEqual(result.exitCode, 0);
    assert.strictEqual(result.stdout, '2');
  });

  it('should show error for invalid date string', () => {
    const result = runCLI('"invalid date"');
    assert.strictEqual(result.exitCode, 1);
    assert.include(result.stderr, 'Error:');
    assert.include(result.stderr, 'Invalid date string');
  });

  it('should show error for invalid week identifier with --from', () => {
    const result = runCLI('--from abc');
    assert.strictEqual(result.exitCode, 1);
    assert.include(result.stderr, 'Error:');
    assert.include(result.stderr, 'Invalid week identifier');
  });

  it('should show error for --from without argument', () => {
    const result = runCLI('--from');
    assert.strictEqual(result.exitCode, 1);
    assert.include(result.stderr, 'Error:');
    assert.include(result.stderr, '--from requires a week identifier');
  });

  it('should show error for unknown option', () => {
    const result = runCLI('--unknown');
    assert.strictEqual(result.exitCode, 1);
    assert.include(result.stderr, 'Error:');
    assert.include(result.stderr, 'Unknown option: --unknown');
  });
});
