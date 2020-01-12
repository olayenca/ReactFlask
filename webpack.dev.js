const merge = require("webpack-merge");
const common = require("./webpack.config.js");

module.exports = env =>
merge(common("development"), {
	mode: "development",
	devtool: "source-map",
	devServer: {
		open: false
	}
});