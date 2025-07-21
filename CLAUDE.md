# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern Node.js utility library that provides unique and sequential week identifiers for JavaScript Date objects or date strings. Week #1 starts on January 5, 1970 (Monday), and the system calculates sequential week numbers from that point.

**Current Version:** 2.0.2 (Major modernization from 2016 to 2025 standards)

## Core Architecture

- `index.js`: Main ES6+ module with two exported functions:
  - `weekIdentifier(date)`: Converts date to sequential week number (throws errors for invalid input)
  - `dateFromWeek(weekIdentifier)`: Converts week number back to Monday date  
- `cli.js`: Enhanced command-line interface with argument parsing and error handling
- `test.js`: Core library tests (7 tests covering all functionality)
- `test-cli.js`: Comprehensive CLI test suite (12 tests covering all CLI features)

## Modern Development Stack (2025)

### Testing & Quality
- **Test Framework:** Mocha v11.7.1 + Chai assertions
- **Coverage:** NYC (100% coverage achieved - 19 tests total)
- **Linting:** ESLint v9 with modern flat configuration
- **Formatting:** Prettier with consistent code style

### CI/CD Pipeline  
- **GitHub Actions:** Multi-Node.js testing (18, 20, 22)
- **Coverage Reporting:** Codecov integration
- **Security:** Zero npm audit vulnerabilities
- **Quality Gates:** All tests must pass, 100% coverage maintained

## Common Commands

```bash
# Testing
npm test                    # Run all tests with coverage (19 tests)
npm run test:coverage      # Generate HTML coverage report

# Code Quality  
npm run lint               # Run ESLint
npm run lint:fix          # Auto-fix ESLint issues
npm run format            # Format code with Prettier
npm run format:check      # Check Prettier formatting

# Development
npm ci                     # Clean install dependencies
npm audit                  # Check for vulnerabilities (should be 0)
```

## Testing Architecture

### Core Library Tests (`test.js` - 7 tests)
- Date string validation and parsing
- Date object handling  
- Error cases for invalid inputs
- Current date functionality
- Week-to-date conversion

### CLI Tests (`test-cli.js` - 12 tests)  
- Command-line argument parsing
- Help and version flags
- Date conversion functionality
- `--from` flag for week-to-date conversion  
- Error handling and user feedback
- Edge cases and validation

## Key Implementation Details

### Core Algorithm
- **Epoch Start:** January 5, 1970 (Monday) = Week 1
- **Week Calculation:** Uses optimized constants for performance
- **Error Handling:** Strict validation with descriptive error messages
- **Input Support:** Date objects, date strings, or current date (default)

### Performance Optimizations
- Cached constants: `EPOCH_START`, `EPOCH_START_TIMESTAMP`, `MILLISECONDS_PER_WEEK`
- Zero runtime dependencies for minimal overhead
- Efficient date parsing and validation

### CLI Features  
- Basic usage: `week-identifier [date]`
- Reverse conversion: `--from <weekId>` 
- Help system: `--help`, `-h`
- Version info: `--version`, `-v`
- Error handling with exit codes

## Security Profile

- **Security Rating:** Excellent (5/5 stars)
- **Runtime Dependencies:** Zero (minimal attack surface)
- **Vulnerabilities:** None (npm audit clean)
- **Input Validation:** Comprehensive with proper error handling
- **Code Practices:** Strict mode, ESLint enforced, no eval/injection vectors

## Development Guidelines

### Code Style
- **ES6+ Features:** const/let, arrow functions, template literals
- **Error Handling:** Throw descriptive errors instead of returning NaN
- **Testing:** Maintain 100% coverage, test error paths
- **Documentation:** JSDoc annotations for all functions

### Release Process
- Version bumping follows semantic versioning
- CHANGELOG.md updated for each release
- Git tags for all releases (`v2.0.2` format)
- GitHub Actions validates all changes
- Security audit before each release

## Project Structure

```
week-identifier/
├── index.js              # Core library (ES6+)
├── cli.js                # CLI interface
├── test.js               # Core tests
├── test-cli.js          # CLI tests  
├── package.json          # Dependencies & scripts
├── eslint.config.js     # ESLint v9 configuration
├── .prettierrc.json     # Prettier formatting
├── .github/workflows/   # CI/CD pipeline
├── CHANGELOG.md         # Release history
├── README.md            # User documentation
└── LICENSE              # MIT License
```

## Modernization History

This project was completely modernized from 2016 to 2025 standards:
- **v1.0.2 (2016):** Legacy ES5 codebase  
- **v2.0.0 (2025):** Complete ES6+ rewrite with breaking changes
- **v2.0.1 (2025):** CI/CD fixes and stability improvements  
- **v2.0.2 (2025):** Package cleanup and security updates

The modernization included dependency updates, modern tooling, comprehensive testing, GitHub Actions CI/CD, and security hardening while maintaining API compatibility where possible.