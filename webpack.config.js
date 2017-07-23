module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: __dirname + "/app/temp/scripts",
    filename: "[name].js"
  },
    module: {
       loaders: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',

             query: {
                 presets: ['es2015']
             }
          }
       ]
    }
};
