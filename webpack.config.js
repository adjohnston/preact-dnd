const config = {
  entry: `${__dirname}/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}

module.exports = config
