const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: path.join(__dirname, '../src/index.js'),
	output: {
		filename: '[name].[hash].js',
		path: path.join(__dirname, '../dist'),
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: ['file-loader']
		}, {
			test: /\.scss$/,
			use: ['sass-loader']
		}, {
			test: /\.less$/,
			use: ['style-loader', 'css-loader', 'less-loader']
		}, {
		// 	test: /\.(png|jpg|jpeg|svg|gif|bmp|ico)$/,
		// 	use: ['file-loader']
		// }, {
	        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
	        loader: 'url-loader',
	        options: {
	          limit: 10000
	        }
		}, {
			test: /.js$/,
			include: [path.join(__dirname, '../src')],
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['babel-preset-env']
				}
			}
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../index.html')
		})
	]
}