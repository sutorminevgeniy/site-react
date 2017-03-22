var path = require('path');

module.exports = {
  entry: './src/App.jsx',

  output: {
    filename: 'bundle.js',
    path: path.join( __dirname, './public/')
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
        loader: 'file-loader'
      }
]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    inline: true,
    contentBase: './public',
    port: 3000,
    historyApiFallback: true
  },

  devtool: 'eval-source-map'
};