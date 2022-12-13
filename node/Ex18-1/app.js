import express from 'express';
import './connect/js';
import { indexApi } from './routes/router.js';


const app = express();

app.use(express.json());
const PORT = 8080;

app.use('/', indexApi);

app.get('/', (req, res) => {
    res.send('product');
});

app.listen(PORT, () => {
	console.log('app listen to ' + PORT);
});
