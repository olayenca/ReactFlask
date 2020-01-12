const path = require("path"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  autoprefixer = require("autoprefixer/lib/autoprefixer"),
  UglifyJsPlugin = require("webpack-uglify-harmony-plugin");

module.exports = env => ({
  mode: env,
  entry: "./templates/public/index.tsx",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./templates/static/"),
    chunkFilename: "[name].bundle.js",
    libraryTarget: "umd",
    globalObject: "this"
  },
  resolve: {
    extensions: [".js", ".tsx", ".scss", ".ts"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",
        options: {
          plugins: ["syntax-dynamic-import"],
          babelrc: false,
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          "resolve-url-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [autoprefixer()]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "resolve-url-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(otf)([\?]?.*)$/,
        use: ["file-loader?name=[name].[ext]"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|ico)$/,
        use: ["url-loader"]
      }
    ]
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
    hints: false
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: "all",
      minChunks: 3,
      minSize: 30000,
      name: true
    },
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  }
});
