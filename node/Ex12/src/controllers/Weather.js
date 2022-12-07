import fetch from 'node-fetch';

export const fetchData = async (url) => {
	const res = await fetch(url);
	const data = await res.json();
	return data;
}
export const apiContol = (req, res) => {
	fetchData(
		'https://api.openweathermap.org/data/2.5/forecast?q=${req.params.location}&appid=54188b454bc3a4b8dabc5382ba68c389'
	)
		.then(({ value }) => {
			res.status(200).send(value);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};
