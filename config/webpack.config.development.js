const webpack = require('webpack');

module.exports = ({ paths, options }) => ({
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        loaders: [
          'react-hot-loader/webpack',
          'awesome-typescript-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              localIdentName: '[local]__[path]__[hash:base64:3]',
              modules: true,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: paths.dist,
    host: '127.0.0.1',
    port: '8080',
    hot: true,
    open: true,
    color: true,
    historyApiFallback: {
      disableDotRule: true
    },
    progress: true,
    proxy: {
      '/v2': {
        target: 'http://api-route',
        secure: false
      }
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})