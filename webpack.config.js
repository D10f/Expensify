const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
      // use: {
      //   loader: 'babel-loader',
      //   options: {
      //     presets: ['@babel/preset-react', '@babel/preset-env'],
      //     plugins: [
      //       '@babel/plugin-proposal-class-properties',
      //       '@babel/plugin-transform-modules-commonjs'
      //     ]
      //   }
      // }
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 1000,
      ignored: /node_modules/
    }
  },
  devtool: 'source-map'
}
