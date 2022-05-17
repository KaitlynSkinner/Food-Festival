// Require path module
const path = require("path");
const webpack = require("webpack");


module.exports = {
    // provide webpack with properties: entry, output, and mode

    // entry point is the root of the bundle and the beginning of the dependency graph (Note: give it the relative path to the client's code)
    entry: './assets/js/script.js',

    // output takes the bundled code, and outputs the bundle to a folder specified below
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },

    // providePlugin plugin to define the $ and jQuery variables 
    plugins:[
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
      ],
      

    // mode in which we want webpack to run (Note: default mode is production)
    mode: 'development'
};
