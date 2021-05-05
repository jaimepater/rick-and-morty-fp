module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'react-app',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-param-reassign': 'off',
    '@typescript-eslint/ban-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'no-shadow': 'off',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': [2, { devDependencies: ['**/test.tsx', '**/test.ts'] }],
    'import/prefer-default-export': 'off',
    'import/no-cycle': [1, { maxDepth: 1 }],
    'jsx-a11y/label-has-for': [0],
    'linebreak-style': 0,
    'no-confusing-arrow': [0],
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
        tabWidth: 2,
        jsxBracketSameLine: false,
      },
    ],
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
};
