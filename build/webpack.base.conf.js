const path = require('path')

module.exports = {
	entry: path.join(__dirname, '../src/index.js'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '../dist'),
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.(png|jpg|jpeg|svg|gif|bmp|ico)$/,
			use: ['file-loader']
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: ['file-loader']
		}]
	}
}