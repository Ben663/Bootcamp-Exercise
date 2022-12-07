import express from 'express'

const app = express();
const PORT = '6000';

app.use(express.json());
app.use('/api',movies)


app.listen(PORT, () => {
	console.log('im in server' + PORT);
})