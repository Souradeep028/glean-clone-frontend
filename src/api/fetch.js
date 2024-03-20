export const fetchData = async (term) => {
	const BASE_URL = '';
	const url = `${BASE_URL}?query=${term}`;
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Network response was not ok (status: ${response.status})`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('There has been a problem with your fetch operation:', error);
		throw error;
	}
};
