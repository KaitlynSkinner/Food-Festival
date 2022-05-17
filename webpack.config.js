// Require path module
const path = require("path");
const webpack = require("webpack");
// Require webpack-bundle-analyzer plugin
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


module.exports = {
    // provide webpack with properties: entry, output, and mode

    // entry point is the root of the bundle and the beginning of the dependency graph (Note: give it the relative path to the client's code)
    entry: {
      app: "./assets/js/script.js",
      events: "./assets/js/events.js",
      schedule: "./assets/js/schedule.js",
      tickets: "./assets/js/tickets.js"
    },

    // output takes the bundled code, and outputs the bundle to a folder specified below
    output: {
        path: __dirname + "dist",
        filename: "[name].bundle.js"
    },

    // will identify the type of files to pre-process using the test property to find a regular expression, or regex
    module: {
      rules: [
        {
          // will process any image file with the file extension of .jpg
          test: /\.jpg$/i,
          // implement loader 
          use: [
            {
              loader: 'file-loader',
              options: {
                esModule: false,
                name (file) {
                  return "[path][name].[ext]"
                },
                publicPath: function(url) {
                  return url.replace("../", "/assets/")
                }
              }
            },
            {
              loader: 'image-webpack-loader'
            }
          ]
        }
      ]
    },

    // providePlugin plugin to define the $ and jQuery variables 
    plugins:[
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
          analyzerMode: "static", // the report outputs to an HTML file in the dist folder
        })
      ],
      

    // mode in which we want webpack to run (Note: default mode is production)
    mode: 'development'
};
