const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport?query=london';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ce3b6efb66msh7742c71395305acp1ecdadjsnc190f2c35d1d',
		'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}