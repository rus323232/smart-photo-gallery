const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = ({ paths, env }) => ({
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
    modules: ['node_modules'],
    alias: {
      '@': paths.src,
    },
  },
  entry: {
    main: path.join(paths.src, 'index.tsx'),
  },
  output: {
    path: paths.dist,
    filename: path.join('js', '[name].[hash:3].js'),
    chunkFilename: path.join('js', '[name].chunk.[hash:3].js'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial',
        },
      },
    },
  },
  module: {
    rules: [{
        test: /\.(svg|png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'images/[hash:6].[ext]',
          },
        }],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(ru)$/),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: true,
      inject: true,
      template: path.join(paths.public, 'index.html'),
    }),
    new CopyPlugin([{
      from: paths.public,
      to: paths.dist,
      ignore: ['*.html'],
    }]),
  ]
});

module.exports = ({ paths, env = 'dev' }) => webpackMerge(
  commonConfig({ paths, env }),
  require(path.resolve(__dirname, `webpack.config.${env}.js`))({
    paths,
    env
  })
)