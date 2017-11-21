
module.exports = {
	dev: {
		proxyTable: {
			'/api': {
				target: 'http://192.168.10.187:4000/',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/api'
				}
			}
		}
	}
}