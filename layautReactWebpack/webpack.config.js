const isDev = process.env.NODE_ENV === "development";
const path = require("path");
// Need for create index.html and connect all javascript file
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
//For optimization style
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

//Plugin give us posible for add plugin css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Clean all wasted file inside build folder
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const babelOptions = (preset) => {
  const options = {
    presets: [["@babel/preset-env", { targets: "defaults" }]],
    plugins: ["@babel/plugin-proposal-class-properties"],
  };
  if (preset) {
    options.presets.push(preset);
  }
  return options;
};

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };

  // Оптимизирует наш код
  if (!isDev) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin(),
    ];
  }
  return config;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./index.js",
  //Добаляем DevServer чтоб не делать перезагрузку вручную
  // yarn add webpack-dev-server -D
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    compress: true,
    historyApiFallback: true,
    port: 8000,
    hot: true,
  },
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    clean: true,
  },
  //Он оптимизирует наши
  // библиотеки и соберает отдельно разные библиотеки выносить в vendor
  optimization: optimization(),
  resolve: {
    //Какие разширение по умолчанию понимать
    // Нужны для того чтоб не прописывать путь
    extensions: [".js", ".ts", ".jsx"],
    //Крутая штука которая помогает убирать пути
    // и давать псевдонимы
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@context": path.resolve(__dirname, "src/context"),
    },
  },
  //ADD PLUGINS WHEN WE NEED
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
    new ReactRefreshWebpackPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
  ],
  // Need to purse another type file in javascript
  // here it understand which type css

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [require.resolve("react-refresh/babel")],
          },
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelOptions("@babel/preset-typescript"),
        },
      },
      //  yarn add -D sass-loader sass
      // extention scss
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader",
          "sass-loader",
        ],
      },
      // yarn add style-loader css-loader -D
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader",
        ],
      },

      // yarn add file-loader -D
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: ["file-loader"],
      },

      // yarn add file-loader -D
      // extention ttf font-famaly
      {
        test: /\.(ttf|wof|wof2|eot)$/,
        use: ["file-loader"],
      },
    ],
  },
};
