const webpack = require('webpack')
const path = require('path')

module.exports = {
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
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.FIREBASE_API_KEY": JSON.stringify(process.env.FIREBASE_API_KEY),
      "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      "process.env.FIREBASE_DATABASE_URL": JSON.stringify(process.env.FIREBASE_DATABASE_URL),
      "process.env.FIREBASE_PROJECT_ID": JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      "process.env.FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
      "process.env.FIREBASE_APP_ID": JSON.stringify(process.env.FIREBASE_APP_ID)
    })
  ],
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
