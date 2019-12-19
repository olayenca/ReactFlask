const path = require("path");
const webpack = require("webpack");

const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = env =>
merge(common("development"), {
	mode: "development",
	devtool: 'inline-source-map',
	devServer: {
		open: true,
		contentBase: './build'
	}
});
