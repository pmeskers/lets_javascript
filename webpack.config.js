let path = require('path');

module.exports = {
  output: {
    filename: 'index.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js'],
    root: [
      path.resolve('./src/js/components'),
      path.resolve('./src/js/services')
    ]
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
};
