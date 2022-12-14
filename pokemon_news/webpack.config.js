const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");
const Dotenv = require('dotenv-webpack');

module.exports = (_, argv) => {
  return {
    output: {
      publicPath: argv.mode === 'development' ? "http://localhost:4001/" : 'https://pokedexmf-news.vercel.app/',
    },

    resolve: {
      extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".json"],
    },

    devServer: {
      port: 4001,
      historyApiFallback: true
    },

    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.tsx?$/,
          use: [
            "babel-loader",
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
                appendTsSuffixTo: ["\\.vue$"],
                happyPackMode: true,
              },
            },
          ],
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
      ],
    },

    plugins: [
      new Dotenv(),
      new VueLoaderPlugin(),
      new ModuleFederationPlugin({
        name: "pokemon_news",
        filename: "remoteEntry.js",
        remotes: {},
        exposes: {
          './News': './src/components/News/News.ts'
        },
        shared: require("./package.json").dependencies,
      }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),
    ],
  }
};
