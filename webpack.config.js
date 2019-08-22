const path = require("path")

module.exports = env => {
  return {
    entry: env === "class" ? "./js/lumens.js" : "./js/main.js",
    mode: "production",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: env === "class" ? "lumens.js" : "main.js",
      library: "Lumens",
      libraryTarget: "umd",
      libraryExport: "default",
      umdNamedDefine: true
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
}
