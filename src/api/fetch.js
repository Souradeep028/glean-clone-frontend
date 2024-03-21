export const fetchData = async (term) => {
	const BASE_URL = 'https://6a26-2001-8f8-1135-1ad-a01a-72ba-299b-aef6.ngrok-free.app';
	const url = `${BASE_URL}?query=${term}`;
	try {
		const response = await fetch(url, {
			headers: {
				'content-type': 'application/json',
			},
		});
		if (!response.ok) {
			throw new Error(`Network response was not ok (status: ${response.status})`);
		}
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error('There has been a problem with your fetch operation:', error);
		throw error;
	}
};
