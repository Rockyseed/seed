'use strict';

const build = require('@microsoft/web-library-build');
const fs = require('fs');
const path = require('path');

const webpack = build.webpack.resources.webpack;
const isProduction = build.webpack.buildConfig.production;
const libFolder = path.join(__dirname, build.webpack.buildConfig.libFolder);
const distFolder = path.join(__dirname, build.webpack.buildConfig.distFolder);

const entry = {};
fs.readdirSync(path.join(libFolder, 'scenarios')).forEach((scenario) => {
  entry[scenario] = path.join(libFolder, 'scenarios', scenario, 'main.js');
});

let webpackConfig = {
  context: __dirname,
  devtool: (isProduction) ? undefined : 'source-map',
  entry: entry,
  output: {
    path: distFolder,
    filename: `[name]${isProduction ? '.min' : ''}.js`
  },
  externals: [
    {
      'react': 'React',
    },
    {
      'react-dom': 'ReactDOM'
    }
  ]
};
if (isProduction && webpackConfig.plugins) {
  webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    compress: {
      dead_code: true,
      warnings: false
    }
  }));
}
module.exports = webpackConfig;
