module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  plugins: ['import', 'prettier', '@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': "off",
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/camelcase': 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    'no-mixed-operators': 1,
    'no-param-reassign': 1,
    'no-underscore-dangle': 0,
    'prefer-destructuring': [
      2,
      {
        array: false,
        object: true,
      },
    ]
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
