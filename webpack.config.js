const path = require("path");
const webpack = require("webpack");

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = !isProduction;

const loaderRules = [
	{
		test: /\.svg$/,
		use: "svg-inline-loader",
	},
	{
		test: /\.(css)$/i,
		use: ["style-loader", "css-loader"],
	},
	{
		test: /\.(js)x?$/,
		exclude: "/node_modules/",
		use: "babel-loader",
	},
];

module.exports = (env, argv) => {
	const config = {
		entry: ["./src/index.js"],
		mode: isProduction ? "production" : "development",
		module: {
			rules: loaderRules,
		},
		output: {
			path: path.join(__dirname, "/dist"),
			publicPath: "/",
			filename: "index.bundle.js",
		},
		devServer: {
			static: "./dist",
			hot: true,
		},
		plugins: [],
	};

	if (isDevelopment) {
		config.plugins.push(new webpack.HotModuleReplacementPlugin());
	}

	return config;
};
