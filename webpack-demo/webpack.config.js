const glob = require("glob");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "src/scss"),
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src/css"),
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: path.resolve(__dirname, "src/img"),
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        // minify: CssMinimizerPlugin.cssnanoMinify,
        // minify: CssMinimizerPlugin.cssoMinify,
        // minify: CssMinimizerPlugin.cleanCssMinify,
        minify: CssMinimizerPlugin.lightningCssMinify,
        minimizerOptions: {
          cssModules: true,
        },
      }),
      new TerserPlugin(),
    ],
    minimize: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(path.join(__dirname, "src/**/*"), { nodir: true }),
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    })
  ]
};