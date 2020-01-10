const merge = require("webpack-merge");
const common = require("./webpack.config.js");

module.exports = env =>
merge(common("production"), {
	mode: "production",
	devtool: "source-map",
	devServer: {
		open: false
	}
});