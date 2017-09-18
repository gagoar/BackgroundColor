const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index',
  ],
  devtool: 'eval',
  output: {
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src'),
    ],
    // directories where to look for modules

    extensions: ['.js', '.json', '.css'],
    // extensions that are used
  },
  module: {
    rules: [
      // Process JS with Babel.
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader'),
        options: {
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
