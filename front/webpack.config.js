const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const config = {
  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
    subscribe_form: path.resolve(
      __dirname,
      "./src/views/subscribe_form/subscribe_form.js"
    ),
    // add_movie_form: path.resolve(__dirname,"./src/views/add_movie_form/add_movie_form.js"
    // ),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  devtool: "source-map",
  //*? this server set up watches the 'src'> slower
  // devServer: {
  //   static: {
  //     directory: path.resolve(__dirname, "src"),
  //   },
  //   watchFiles: ["src/**/*.html"],
  //   open: true,
  //   host: "localhost",
  //   port: 3000,
  //   hot: true,
  //   compress: true,
  //   historyApiFallback: true,
  // },
  //*? this one is simpler, used along with watch script
  devServer: {
    static: "./dist",
    open: true,
    host: "localhost",
    port: 3000,
    historyApiFallback: true,
  },
  optimization: {
    runtimeChunk: "single",
  }, //*for several entry points
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"), //*?watch this template
      filename: "index.html",
      chunks: ["index"], //*? the js to inject in this html is here.
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "src/views/add_movie_form/add_movie_form.html"
      ),
      filename: "views/add_movie_form/add_movie_form.html",
      chunks: ["add_movie_form"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "src/views/subscribe_form/subscribe_form.html"
      ),
      filename: "views/subscribe_form/subscribe_form.html",
      chunks: ["subscribe_form"],
    }),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|jpeg|ico)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
    config.output.filename = "[name]-[contenthash]-bundle.js";
    config.output.assetModuleFilename = "images/[name]-[contenthash][ext]";
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "[name]-[contenthash].css",
      })
    );
  } else {
    config.mode = "development";
  }
  return config;
};
