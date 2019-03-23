const path = require('path');
const commonConfig = require('./config/webpack.config.common');

const env = process.env.NODE_ENV;
const paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
  public: path.resolve(__dirname, 'src', 'public'),
  assets: path.resolve(__dirname, 'src', 'assets'),
};
devServer = {
  
};

const preset = {
  paths,
  env,
}

module.exports = commonConfig(preset);