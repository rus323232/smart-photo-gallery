const postcssPresetEnv = require('postcss-preset-env');
const csso = require('postcss-csso');

module.exports = {
  plugins: [
    postcssPresetEnv({
      browsers: ['last 3 versions', 'IE > 10'],
      stage: 3
    }),
    csso
  ]
};