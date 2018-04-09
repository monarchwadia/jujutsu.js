const WriteFilePlugin = require('write-file-webpack-plugin');
const path = require('path');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/jujutsu.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "jujutsu.js"
  },
  plugins: [
    new WriteFilePlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist")
  }
}