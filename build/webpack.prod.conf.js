const webpack = require('webpack')
const baseWebpackConf = require('./webpack.base.conf')
const merge = require('webpack-merge')
const path = require('path')

module.exports = merge(baseWebpackConf, {
	entry: {
		main: path.join(__dirname, '../src/index.js'),
		vendor: ['velocity-animate']
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.[hash].js'
		})
	]
})