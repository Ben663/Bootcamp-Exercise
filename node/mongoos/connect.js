import mongoose from "mongoose";
mongoose.connect('mongodb://127.0.0.1/product', (error, mongodbConnecttion) => {
	if (error) {
		console.log(error);
	}
	if (process.env.NODE_ENV) {
		const { host, port, name } = mongodbConnecttion;
		console.log({ host, port, name });
	}
});