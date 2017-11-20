const webpack = require('webpack')
const baseWebpackConf = require('./webpack.base.conf')
const merge = require('webpack-merge')

baseWebpackConf.entry = ['webpack-hot-middleware/client?reload=true'].concat(baseWebpackConf.entry)

module.exports = merge(baseWebpackConf, {
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
})