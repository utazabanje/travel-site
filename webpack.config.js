module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: __dirname + "/app/temp/scripts",
    filename: "App.js"
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
