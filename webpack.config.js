let path = require('path');

module.exports = {
  output: {
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js'],
    root: [
      path.resolve('./src/ts')
    ]
  }
};
