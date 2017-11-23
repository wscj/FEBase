const webpack = require('webpack')
const webpackConf = require('./webpack.prod.conf')
const fse = require('fs-extra')
const path = require('path')

fse.emptyDirSync(path.join(__dirname, '../dist'))

webpack(webpackConf, (err, stats) => {
	if (err) throw err

	process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

	process.stdout.write('\n Build complete.\n')
})