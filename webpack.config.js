var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
		publicPath: "dist/",
		filename: "build.js",
	},
	module: {
		rules: [
			{
			test: /\.vue$/,
			loader: "vue-loader",
			options: {
				'scss': 'vue-style-loader!css-loader!sass-loader',
				'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
			},
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			},
			{
				test: /\.json$/,
				loader: 'json-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
				]
			},
		],
	},
	resolve: {
		alias: {
			"vue$": "vue/dist/vue.esm.js",
		},
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true,
	},
	performance: {
		hints: false,
	},
	devtool: "#eval-source-map",
};
