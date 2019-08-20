const path = require("path")

module.exports = {
  entry: "./js/lumens.js",
  mode: "development",
  output: {
    filename: "lumens.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: 'var',
    library: 'Lumens'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}
