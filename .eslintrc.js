module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin',
  ],
  rules: {
    indent: 'off',
    'no-restricted-syntax': 'off',
    'no-empty-function': 'off',
    'no-useless-constructor': 'off',
    'no-await-in-loop': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
  },
};
