const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: path.join(__dirname, '../src/index.jsx'),
	output: {
		filename: '[name].[hash].js',
		path: path.join(__dirname, '../dist'),
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: ['file-loader']
		}, {
	        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
	        loader: 'url-loader',
	        options: {
	          limit: 10000
	        }
		}, {
			test: /\.js$/,
			include: [path.join(__dirname, '../src')],
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['babel-preset-env']
				}
			}
		}, {
			test: /\.jsx$/,
			include: [path.join(__dirname, '../src')],
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['babel-preset-env', 'babel-preset-react'],
					env: {
						development: {
							presets: ['babel-preset-react-hmre']
						}
					}
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