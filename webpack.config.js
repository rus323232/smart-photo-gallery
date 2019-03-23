const path = require('path');
const commonConfig = require('./config/webpack.config.common');

const env = process.env.NODE_ENV;
const isBundleAnalyzer = Boolean(process.env.ANALYZER);
const paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
  public: path.resolve(__dirname, 'src', 'public'),
  assets: path.resolve(__dirname, 'src', 'assets'),
};
const options = {
  isBundleAnalyzer,
};
const preset = {
  paths,
  env,
  options,
}

console.log(preset)

module.exports = commonConfig(preset);