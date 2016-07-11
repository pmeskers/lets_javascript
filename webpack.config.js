module.exports = {
  output: {
    filename: 'index.js'
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
};
