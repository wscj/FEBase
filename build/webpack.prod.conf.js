const webpack = require('webpack')
const baseWebpackConf = require('./webpack.base.conf')
const merge = require('webpack-merge')
const path = require('path')

module.exports = merge(baseWebpackConf, {
	entry: {
		main: path.join(__dirname, '../src/index.jsx'),
		vendor: ['velocity-animate']
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.[hash].js'
		})
	],
	module: {
		rules: [{
			test: /.css$/,
			use: ['style-loader', 'css-loader?modules&localIdentName=[local]-[hash:base64:12]']
		}, {
			test: /\.scss$/,
			use: ['sass-loader']
		}, {
			test: /\.less$/,
			use: ['style-loader', 'css-loader', 'less-loader']
		}]
	},
})