var path = require('path');

module.exports = {
  entry: './src/app.jsx',

  output: {
    filename: 'bundle.js',
    path: path.join( __dirname, './public/')
  },

  module: {
    loaders: [
      {
        test: /\.js$|\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$/,
        loader: 'file-loader',
        query: {
            name: 'font/[name].[ext]'
        }
      },
      {
        test: /\.svg$|\.png|\.jpe?g|\.gif$/,
        loader: 'file-loader',
        query: {
            name: '/img/[name].[ext]'
        }
      }
]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    inline: true,
    contentBase: './public',
    port: 3030,
    historyApiFallback: true
  },

  devtool: 'eval-source-map'
};