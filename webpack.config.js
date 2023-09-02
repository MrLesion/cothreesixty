const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/module.js',
  output: {
    filename: 'co-three-sixty.js',
    path: path.resolve(__dirname, 'dist')
  },
};