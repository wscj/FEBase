const express = require('express');
const app = express();
const path = require('path');
const webpack = require('webpack')
const webpackConf = require('./webpack.dev.conf')
const compiler = webpack(webpackConf)

//设置静态文件路径
app.use(express.static('./static'));

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConf.output.publicPath,
  quiet: true
})

app.use(devMiddleware)
app.use(require("webpack-hot-middleware")(compiler));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../index.html'), err => {
		err && console.error(err);
	});
});

app.listen(3500, () => {
	console.log('listening on port 3500');
});