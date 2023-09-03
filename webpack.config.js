const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'co-three-sixty.js',
    path: path.resolve(__dirname, 'dist')
  },
};