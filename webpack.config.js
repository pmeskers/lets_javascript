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
  },
  externals: {
    // These three are required by enzyme...
    // https://github.com/airbnb/enzyme/issues/47
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    'react/addons': true,
    'cheerio': 'window'
  }
};
