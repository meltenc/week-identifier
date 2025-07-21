# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.3] - 2025-01-21

### 📦 Package Optimization
- **npm Package**: Add .npmignore to optimize package size (-54% reduction)
- **Package Size**: Reduced from 28.8 kB (15 files) to 13.1 kB (5 files)
- **Distribution**: Include only essential runtime files (index.js, cli.js, package.json, README.md, LICENSE)
- **Exclusions**: Remove development files, tests, CI/CD config, and documentation from npm package

### 📚 Documentation  
- **CLAUDE.md**: Complete rewrite with modern 2025 development stack documentation
- **Development Guide**: Add comprehensive testing architecture and security profile
- **Project Structure**: Document modernization history and development guidelines
- **Standards**: Updated all commands and workflows to reflect current state

### 🎯 User Experience
- **Install Size**: Faster npm install with smaller package footprint
- **Clean Distribution**: Only production-ready files in npm package
- **Better Documentation**: Enhanced developer experience for contributors

## [2.0.2] - 2025-01-21

### 🧹 Cleanup & Maintenance
- **Dependencies**: Remove obsolete packages (coveralls, istanbul, publish-please)
- **Scripts**: Simplify npm scripts, remove redundant commands
- **Configuration**: Remove .editorconfig (redundant with Prettier)
- **Configuration**: Simplify .gitattributes to relevant file types only
- **Security**: Update Mocha to v11.7.1, fix all npm audit vulnerabilities
- **Legal**: Update LICENSE copyright to 2016-2025

### 🔧 Improvements
- **Package Size**: Reduced package size by removing unnecessary dependencies
- **Security**: Comprehensive security audit with excellent rating (5/5 stars)
- **Maintenance**: Streamlined development workflow and configuration files
- **Standards**: Updated to latest Node.js and npm security standards

## [2.0.1] - 2025-01-21

### 🐛 Fixed
- **GitHub Actions**: Fix Codecov integration with proper lcov.info file generation
- **CI/CD**: Fix CLI functionality tests in GitHub Actions workflow
- **Repository**: Remove obsolete configuration files (JSHint/JSCS, Travis CI, Coveralls)
- **Testing**: Update coverage script to include all test files and generate lcov report

### 🧹 Cleanup
- Remove legacy `.jscsrc`, `.jshintignore`, `.jshintrc` configuration files
- Remove obsolete `.travis.yml` and `.coveralls.yml` CI configuration  
- Clean up generated coverage directories from version control

## [2.0.0] - 2025-01-21

### 💥 Breaking Changes
- **Error Handling**: Functions now throw errors for invalid inputs instead of returning NaN
- **Input Validation**: Strict validation for date strings and Date objects
- **CLI Arguments**: Enhanced argument parsing may change behavior for edge cases

### ✨ Added
- **Modern ES6+ Code**: Migrated from var to const/let, arrow functions, template literals
- **Enhanced CLI**: New `--from <weekId>` option to convert week identifiers back to dates
- **CLI Options**: Added `-h`/`--help` and `-v`/`--version` flags
- **Performance**: Cached constants for better performance (EPOCH_START, MILLISECONDS_PER_WEEK)
- **Error Messages**: Detailed error messages with user-friendly suggestions
- **Development Tools**: Modern toolchain with ESLint v9, Prettier, NYC coverage
- **CI/CD**: GitHub Actions workflow with multi-Node.js version testing
- **Documentation**: Comprehensive JSDoc with modern annotations and detailed README

### 🔧 Changed
- **Tests**: Modernized test syntax, removed callback-based tests
- **Build Process**: Replaced JSHint/JSCS with ESLint, Istanbul with NYC
- **Package Scripts**: Added lint:fix, format, format:check, test:coverage commands
- **Git Workflow**: Improved .gitignore, removed accidentally committed temporary files

### 📚 Documentation
- **README**: Complete rewrite with ES6 examples and CLI documentation
- **JSDoc**: Enhanced with @param, @returns, @throws, @since annotations  
- **Examples**: Modern JavaScript examples throughout
- **CLI Help**: Comprehensive help text with usage examples

### 🧪 Testing
- **Coverage**: Achieved 100% test coverage (19 tests)
- **CLI Tests**: Comprehensive CLI functionality testing
- **Error Testing**: Complete error path validation
- **Multi-Node**: Testing on Node.js 18, 20, and 22

### 🔒 Security
- **Input Validation**: Robust validation prevents invalid date processing
- **Error Boundaries**: Proper error handling prevents crashes

## [1.0.2] - 2016
- Legacy version with basic functionality