const express = require('express');
const app = express();
const path = require('path');

//设置静态文件路径
app.use(express.static('./static'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../index.html'), err => {
		err && console.error(err);
	});
});

app.listen(3500, () => {
	console.log('listening on port 3500');
});