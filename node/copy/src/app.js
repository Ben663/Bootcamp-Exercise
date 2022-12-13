import express from 'express'
import cors from 'cors';
import {weather} from './controllers/Weather.js'

const app = express();
const PORT = '6000';

// app.use(express.json());
app.use(cors());
app.use('/api', weather);


app.listen(PORT, () => {
	console.log('im in server' + PORT);
})