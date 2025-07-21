# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Node.js utility library that provides unique and sequential week identifiers for JavaScript Date objects or date strings. Week #1 starts on January 05, 1970, and the system calculates sequential week numbers from that point.

## Core Architecture

- `index.js`: Main module with two exported functions:
  - `weekIdentifier(date)`: Converts date to sequential week number
  - `dateFromWeek(weekIdentifier)`: Converts week number back to Monday date
- `cli.js`: Command-line interface for the library
- `test.js`: Mocha test suite using Chai assertions

## Common Commands

- Run tests with coverage: `npm test` (uses Istanbul + Mocha)
- Lint code: `npm run lint` (uses JSHint + JSCS)
- Run coverage report: `npm run coveralls`

## Testing

- Test framework: Mocha with Chai assertions
- Coverage: Istanbul
- Test file: `test.js`
- Run single test: Use Mocha's `--grep` flag with specific test names

## Key Implementation Details

- Base date calculation uses January 5, 1970 as week 1 starting point
- Week calculation: `Math.ceil((target.getTime() - lastDayOfWeekZeroTimestamp) / (24 * 3600 * 1000 * 7))`
- Supports various date input formats (strings, Date objects, or current date if no input)
- CLI available as `week-identifier` command after installation