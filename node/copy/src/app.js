const express = require('express')

const app = express()

app.get('/numbers', (req, res) => {
	res.send('success using get');
});
app.post('/numbers', (req, res) => {
	res.send('success using post');
});
app.delete('/numbers', (req, res) => {
	res.send('success using delete');
});
app.put('numbers', (req, res) => {
	res.send('success using put');
});

app.listen(3000, () => {
    console.log('server is up');
})