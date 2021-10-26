const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "./",
    filename: "bundle.js",
  },
  devServer: {
    open: true,
    contentBase: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Front End Test - Greenthumb",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "[name].css",
    }),
  ],
};
