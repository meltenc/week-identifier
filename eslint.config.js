const globals = require('globals');
const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Enforce modern JavaScript practices
      'prefer-const': 'error',
      'no-var': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',

      // Code quality
      'no-unused-vars': 'error',
      'no-console': 'off', // Allow console for CLI tool
      eqeqeq: 'error',
      curly: 'error',

      // Style (handled by Prettier but good to have)
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
    },
  },
  {
    // Test files configuration
    files: ['test.js', 'test-cli.js', '**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
  },
];
