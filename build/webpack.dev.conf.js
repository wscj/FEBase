const webpack = require('webpack')
const baseWebpackConf = require('./webpack.base.conf')
const merge = require('webpack-merge')
const path = require('path')

baseWebpackConf.entry = ['webpack-hot-middleware/client?reload=true'].concat(baseWebpackConf.entry)

module.exports = merge(baseWebpackConf, {
	devtool: '#cheap-module-source-map',
	module: {
		rules: [{
			test: /.css$/,
			use: ['style-loader', 'css-loader?sourceMap&modules&localIdentName=[local]-[hash:base64:6]'],
			exclude: [path.join(__dirname, '../src/assets/img/iconfont')]
		}, {
			test: /.css$/,
			use: ['style-loader', 'css-loader?sourceMap'],
			include: [path.join(__dirname, '../src/assets/img/iconfont')]
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