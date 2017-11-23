const webpack = require('webpack')
const baseWebpackConf = require('./webpack.base.conf')
const merge = require('webpack-merge')

baseWebpackConf.entry = ['webpack-hot-middleware/client?reload=true'].concat(baseWebpackConf.entry)

module.exports = merge(baseWebpackConf, {
	devtool: '#cheap-module-source-map',
	module: {
		rules: [{
			test: /.css$/,
			use: ['style-loader', 'css-loader?sourceMap']
		}, {
			test: /\.scss$/,
			use: ['sass-loader?sourceMap']
		}, {
			test: /\.less$/,
			use: ['style-loader', 'css-loader?sourceMap', 'less-loader']
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
})