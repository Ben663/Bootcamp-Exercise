const http = require('http');
const url = require('url');
const fs = require('fs');

function handler(req, res) {
	const parsedUrl = url.parse(req.url, true);

	if (req.url === '/raw-html') {
		res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
		res.end('<h1>Welcome</h1>');
	} else if (req.url === '/users') {
		res.writeHead(200, { 'Content-type': 'application/json' });
		res.end('{ "name": "yael", "age": 38 }, { "name": "yitz", "age": 33 }');
	} else if (req.url === '/') {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		const indexData = fs.readFileSync('index.html');
		res.write(indexData);
	} else if (req.url === '/index.css') {
		res.writeHead(200, { 'Content-Type': 'text/css' });
		const indexCssData = fs.readFileSync('index.css');
		res.write(indexCssData);
	} else if (req.url === '/index.js') {
		res.writeHead(200, { 'Content-Type': 'text/js' });
		const indexJsData = fs.readFileSync('index.js');
		res.write(indexJsData);
	}
}

const server = http.createServer(handler);
server.listen(3000, () => {
	console.log('server is running on port 3000');
});

