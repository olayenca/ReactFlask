const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');

module.exports = env =>
merge(common("production"), {
	mode: "production",
	devtool: "source-map",
	plugins: [
	// new BaseHrefWebpackPlugin({ baseHref:'~/' })
	],
	devServer: {
		open: false
	}
});
