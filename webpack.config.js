var path = require("path");
var webpack = require("webpack");
// var AppCachePlugin = require('appcache-webpack-plugin');

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

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		// new webpack.optimize.UglifyJsPlugin({
		// 	sourceMap: true,
		// 	compress: {
		// 		warnings: false
		// 	}
		// }),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),
		// new AppCachePlugin({
		// 	cache: [
		// 		"index.html",
		// 		"manifest.json",
		// 		"images/01-cleric.jpg",
		// 		"images/01-monk.jpg",
		// 		"images/01-summoner.jpg",
		// 		"images/02-bard.jpg",
		// 		"images/02-blacksmith.jpg",
		// 		"images/02-merchant.jpg",
		// 		"images/03-alchemist.jpg",
		// 		"images/03-mercenary.jpg",
		// 		"images/03-sorceress.jpg",
		// 		"images/04-archer.jpg",
		// 		"images/04-barbarian.jpg",
		// 		"images/04-wizard.jpg",
		// 		"images/05-alt-peasant.jpg",
		// 		"images/05-peasant.jpg",
		// 		"images/06-alt-knight.jpg",
		// 		"images/06-knight.jpg",
		// 		"images/07-08-kings-guard.jpg",
		// 		"images/07-condottiere.jpg",
		// 		"images/07-rogue.jpg",
		// 		"images/07-thief.jpg",
		// 		"images/08-bogatyr.jpg",
		// 		"images/08-champion.jpg",
		// 		"images/08-warlord.jpg",
		// 		"images/09-10-paladin.jpg",
		// 		"images/09-10-priestess.jpg",
		// 		"images/09-10-templar.jpg",
		// 		"images/11-12-baker.jpg",
		// 		"images/11-12-butcher.jpg",
		// 		"images/11-12-miner.jpg",
		// 		"images/grass-tile.jpg",
		// 		"images/icon.jpg",
		// 		"images/monster-barrens.jpg",
		// 		"images/monster-cavern.jpg",
		// 		"images/monster-desert.jpg",
		// 		"images/monster-forest.jpg",
		// 		"images/monster-glacier.jpg",
		// 		"images/monster-hills.jpg",
		// 		"images/monster-mountains.jpg",
		// 		"images/monster-oasis.jpg",
		// 		"images/monster-ruins.jpg",
		// 		"images/monster-swamp.jpg",
		// 		"images/monster-tundra.jpg",
		// 		"images/monster-undead-samurai.jpg",
		// 		"images/monster-valley.jpg",
		// 		"images/monster-volcano.jpg",
		// 		"dist/build.js",
		// 		"dist/grass-tile.jpg",
		// 	],
		// 	network: ["*"],
		// 	exclude: [ /.*\.appcache/ ],
		// 	output: "manifest.appcache",
		// }),
	])
}
