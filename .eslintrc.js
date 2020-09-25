module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:import/typescript',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:boundaries/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['.next/**/*', 'node_modules/**/*'],
  settings: {
    'boundaries/types': ['pages'],
    'boundaries/no-import-ignored': true,
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/unbound-method': 'off',

    'boundaries/no-private': [
      'error',
      {
        allowUncles: true,
      },
    ],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'error',

    'prettier/prettier': 'warn',

    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'warn',
    'react/jsx-boolean-value': ['error', 'never'],

    'id-length': 'warn',
    'no-console': 'warn',
    'no-process-env': 'off',
    'no-underscore-dangle': 'off',
    'sort-imports': 'off',
  },
};
