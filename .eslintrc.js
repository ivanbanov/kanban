const path = require('path');

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
    'prettier/prettier': ['error', {
      "arrowParens": "always",
      "printWidth": 80,
      "singleQuote": true,
      "tabWidth": 2,
      "trailingComma": "all",
      "semi": false
    }],
  },
  plugins: ['prettier', 'react-hooks'],
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, '/webpack/config.js'),
      },
    },
  },
};

