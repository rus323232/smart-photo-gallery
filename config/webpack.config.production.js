const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = ({ options }) => ({
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              localIdentName: '[local]_[hash:base64:3]',
              modules: true,
              sourceMap: false
            }
          },
          'sass-loader',
          'postcss-loader',
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    }),
    new CleanWebpackPlugin(),
    new webpack.AutomaticPrefetchPlugin(),
    options.isBundleAnalyzer && new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    })
  ].filter(Boolean),
})