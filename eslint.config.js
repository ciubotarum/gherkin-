const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        browser: 'readonly',
        $: 'readonly',
        $$: 'readonly',

        Given: 'readonly',
        When: 'readonly',
        Then: 'readonly',

        expect: 'readonly',
        assert: 'readonly',
        require: 'readonly',
        module: 'readonly',
        console: 'readonly',
        __dirname: 'readonly',
        setTimeout: 'readonly',

        document: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-console': 'off',
      'no-redeclare': 'error',
      'no-empty': 'warn',
      'no-useless-return': 'warn',
      'prefer-const': 'warn',
      'no-var': 'error',
      'class-methods-use-this': 'off',
      'no-useless-constructor': 'warn',
      'no-warning-comments': 'off',
    },
  },
  {
    ignores: [
      'node_modules/**',
      'reports/**',
      '.github/**',
      'package-lock.json',
      '*.config.js',
      'src/configs/wdio.conf.js',
    ],
  },
];
