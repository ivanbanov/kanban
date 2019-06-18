module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'arrow-parens': ['error', 'always'],
    'import/extensions': ['.js', '.jsx', '.json', '.svg'],
    'import/no-extraneous-dependencies': ['error', { ignore: ['webpack/'] }],
    'import/prefer-default-export': 'off',
    'no-return-assign': 'off',
    'prettier/prettier': 'error',
  },
  plugins: ['prettier', 'react-hooks'],
  settings: {
    'import/resolver': {
      node: { paths: ['src'] },
    },
  },
};
