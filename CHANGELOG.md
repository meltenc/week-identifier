# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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