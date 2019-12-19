const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const autoprefixer = require("autoprefixer");
const UglifyJsPlugin = require("webpack-uglify-harmony-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = env => ({
	mode: env,
	entry: "./static/index.tsx",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "./public/build"),
		chunkFilename: "[name].bundle.js",
		publicPath: env === "production" ? "./" : "/"
	},
	resolve: {
		extensions: ['.js', '.tsx', '.scss', '.ts']
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: false,
			template: "./static/index.html",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),
		new CopyWebpackPlugin([{ from: "static/assets" }]),
		new HtmlWebpackTagsPlugin({
			tags: ["js/jquery.min.js", "js/bootstrap.min.js"],
			append: true
		}),
		new ManifestPlugin({
			fileName: 'manifest.webmanifest',
			basePath: '/static/',
			seed: {
				name: 'My Manifest'
			}
		})
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				include: [path.resolve(__dirname, "src")],
				loader: "babel-loader",
				options: {
					plugins: ["syntax-dynamic-import"],
					presets: [
						[
							"@babel/preset-env",
							{
								modules: false
							}
						],
						[
							"@babel/preset-react",
							{
								modules: false
							}
						]
					]
				}
			},
			{
				test: /\.(gif|jpe?g|svg|ico)$/i,
				loader: "file-loader",
				options: {
					name: "[path][name].[ext]"
				}
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
		/*	minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					output: {
						comments: false
					}
				}
			})
			]*/
	},

	node: {
		fs: "empty",
		net: "empty",
		tls: "empty",
		dns: "empty",
		process: true
	}
});
