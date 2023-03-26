const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.tsx",
  devtool: "eval-cheap-source-map",
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "features")]
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "build/app.js",
  },
};
